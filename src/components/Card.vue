<template>
	<v-card class="mycard" :elevation="5" color="rgba(255,255,255,.7)">
		<!-- 头像-用户名>群名称 时间-->
		<v-card-title>
			<el-avatar
				class="el-avatar"
				@click="jumpUser"
				shape="circle"
				:src="avatar"
				v-if="avatar != ''"
			>
				<el-image fit="cover" class="el-avatar"></el-image>
			</el-avatar>
			<v-icon v-else color="#5d5d5d" large>mdi-account</v-icon>
			<v-btn text class="groupname" @click="jumpUser">{{ username }}</v-btn>
			<v-icon class="from-group" v-if="groupname != ''"
				>mdi-chevron-right</v-icon
			>
			<v-btn text class="groupname" @click="openPost" v-if="groupname != ''"
				>{{ groupname }}
			</v-btn>

			<v-spacer></v-spacer>
			<v-menu v-if="isAdmin">
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on" class="rtmunu">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item @click="delPost"> 删除推文 </v-list-item>
					<v-list-item @click="delUserDia = true"> 封删此用户 </v-list-item>
				</v-list>
			</v-menu>

			<v-menu v-if="isMyPost">
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on" class="rtmunu">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item @click="delMyPostDia = true" color="warning">
						删除
					</v-list-item>
				</v-list>
			</v-menu>
		</v-card-title>

		<v-dialog v-model="delMyPostDia" max-width="500">
			<v-card>
				<v-col cols="10" offset="1">
					<v-card-title> 确认删除？ </v-card-title>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn outlined @click="delMyPostDia = false" large>取消</v-btn>
						<v-btn color="error" @click="delMyPost" large>删除</v-btn>
					</v-card-actions>
				</v-col>
			</v-card>
		</v-dialog>

		<v-dialog v-model="delUserDia" max-width="500">
			<v-card>
				<v-col cols="10" offset="1">
					<v-card-title> 删除警告 </v-card-title>
					<v-card-text> 此操作将删除用户及其发布全部推文！ </v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn outlined @click="delUserDia = false" large>取消</v-btn>
						<v-btn color="error" @click="delUser" large>删除</v-btn>
					</v-card-actions>
				</v-col>
			</v-card>
		</v-dialog>

		<!-- 内容 图片 -->
		<v-card-text>
			<v-row class="content-area" v-html="content"> </v-row>

			<el-image
				v-if="havePic"
				:src="firstPic"
				:preview-src-list="pics"
				lazy
			></el-image>

			<!-- tag话题 -->
			<v-row>
				<v-chip outlined v-for="topic in topics" :key="topic" @click="clickTag">
					{{ topic }}
				</v-chip>
				<v-spacer></v-spacer>
				{{ time }}
			</v-row>
		</v-card-text>
		<v-divider></v-divider>

		<!-- 评论区 -->
		<v-card-subtitle style="padding-bottom: 0">
			<v-row
				align-content="center"
				v-for="(replay, index) in shortReplys"
				:key="index"
			>
				<v-col cols="2" class="single-reply">
					<el-avatar
            class="reply-avatar"
            @click="jumpUser"
            shape="circle"
            :src="replay.imgsrc"
            v-if="replay.imgsrc != ''"
          >
            <el-image fit="cover" ></el-image>
          </el-avatar>
          <v-icon v-else color="rgb(155 155 155)" large>mdi-account-circle</v-icon>
				</v-col>
				<v-col class="single-reply single-reply-word flex-nowrap">
					{{ replay.name }}：{{ replay.content }}
				</v-col>
			</v-row>

			<!-- 可折叠的更多评论 -->
		</v-card-subtitle>
		<v-expand-transition>
			<v-card-subtitle v-if="morereply" style="padding-top: 0">
				<v-row
					v-for="(replay, index) in restReplys"
					:key="index"
					align-content="center"
				>
					<v-col cols="2" class="single-reply">
						<v-avatar size="35">
							<img :src="replay.imgsrc" />
						</v-avatar>
					</v-col>
					<v-col class="single-reply single-reply-word flex-nowrap" cols="3">
						{{ replay.name }}：
					</v-col>
					<v-col class="single-reply single-reply-word flex-wrap">
						{{ replay.content }}
					</v-col>
				</v-row>
			</v-card-subtitle>
		</v-expand-transition>
		<v-btn block text v-if="ismoreReply" @click="morereply = !morereply">
			<v-icon>{{ morereply ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
		</v-btn>

		<!-- 发表新评论 -->
		<v-card-actions>
			<v-text-field
				append-icon="mdi-send"
				label="评论"
				v-model="replyContent"
				v-show="replay"
				@click:append="sendReply"
			></v-text-field>
			<v-spacer></v-spacer>
			<v-btn icon text @click="replay = !replay" large color="#5b5b5bdb">
				<v-icon>mdi-message-plus-outline</v-icon>
			</v-btn>
		</v-card-actions>

		<v-snackbar v-model="resultWin">
			{{ result }}
			<template v-slot:action="{ attrs }">
				<v-btn color="blue" text v-bind="attrs" @click="resultWin = false">
					知道了
				</v-btn>
			</template>
		</v-snackbar>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			replay: false,
			morereply: false,
			replyContent: "",
			result: "",
			resultWin: false,
			delUserDia: false,
			delMyPostDia: false,
			firstPic: "",
		};
	},
	props: {
		avatar: String,
		username: String,
		groupname: String,
		content: String,
		time: String,
		topics: Array,
		replays: Array,
		pics: Array,
		postid: Number,
		groupid: Number,
	},
	computed: {
		//判断post是否是自己发的，管理员无视
		isMyPost() {
			//如果是管理员，就无视这个按钮
			if (this.isAdmin) {
				return false;
			}
			if (this.username == this.$store.state.userData.name) {
				return true;
			} else {
				return false;
			}
		},
		ismoreReply() {
			if (this.replays == undefined) {
				return false;
			}
			let replaylen = this.replays.length;
			if (replaylen <= 4) {
				return false;
			}
			return true;
		},
		shortReplys() {
			if (this.replays == undefined) {
				return;
			}
			var short = new Array();
			for (let index = 0; index < this.replays.length && index < 4; index++) {
				short[index] = this.replays[index];
			}
			return short;
		},
		restReplys() {
			if (this.replays == undefined) {
				return;
			}
			var rest = new Array();
			for (let index = 4; index < this.replays.length; index++) {
				rest[index - 4] = this.replays[index];
			}
			return rest;
		},
		onepic() {
			if (this.pics == undefined) {
				return false;
			}
			if (this.pics.length == 1) {
				return true;
			} else {
				return false;
			}
		},
		havePic() {
			if (this.pics == undefined || this.pics.length == 0) {
				return false;
			} else {
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
				this.firstPic = this.pics[0];
				return true;
			}
		},
		isAdmin() {
			return this.$store.getters.isAdmin;
		},
	},
	methods: {
		delMyPost() {
			this.axios
				.get("delMyPost", {
					params: { id: this.postid },
				})
				.then((res) => {
					if (res.status == 200) {
						this.delMyPostDia = false;
						this.result = "删除成功";
						this.resultWin = true;
					}
				})
				.catch((res) => {
					this.delMyPostDia = false;
					this.result = res.response.data;
					this.resultWin = true;
				});
		},
		delUser() {
			this.axios
				.get("/delUserByPost", {
					params: { id: this.postid },
				})
				.then((res) => {
					if (res.status == 200) {
						this.result = res.data;
						this.resultWin = true;
					}
				})
				.catch((res) => {
					this.result = res.response.data;
					this.resultWin = true;
				});
		},
		delPost() {
			this.axios
				.get("/delPost", {
					params: { id: this.postid },
				})
				.then((res) => {
					if (res.status == 200) {
						this.result = res.data;
						this.resultWin = true;
					}
				})
				.catch((res) => {
					this.result = res.response.data;
					this.resultWin = true;
				});
		},
		//点击群名称后跳转到群页面，将id写入vuex
		openPost() {
			this.$store.commit("setClickUserName", this.groupid);
			this.$router.push("/groupPosts");
		},
		//点击用户名称，跳转到用户的个人页面
		jumpUser() {
			this.$store.commit("setClickUserName", this.username);
			this.$router.push("/user");
		},
		//发送评论
		sendReply() {
			let sendData = {
				id: this.postid,
				content: this.replyContent,
				name: this.username,
			};
			this.axios
				.post("newReply", sendData)
				.then((res) => {
					if (res.status == 200) {
						this.replyContent = "";
					}
					this.result = res.data;
					this.resultWin = true;
				})
				.catch((res) => {
					this.result = res.response.data;
					this.resultWin = true;
				});
		},
		clickTag(tag) {
			let name = tag.target.textContent;
			this.$emit("tagname", name);
		},
	},
};
</script>

<style scoped>
.mycard {
	margin: 30px 0;
	padding: 0 1rem;
}
.v-btn {
	text-transform: none;
}
.pic-area {
	padding-bottom: 0.8rem;
}
.v-chip {
	margin-right: 0.5rem;
}
.groupname {
	font-size: 1rem;
	margin: 0;
}
.content-area {
	padding-bottom: 0.8rem;
}
.single-reply {
	padding-top: 3px;
}
.single-reply-word {
	padding-top: 9px;
}
.rtmunu {
	position: absolute;
	right: 10px;
	top: 20px;
}
.image {
	height: auto;
}
.el-avatar {
	height: 50px;
	width: 50px;
}
.reply-avatar{
  height: 35px;
	width: 35px;
}
</style>