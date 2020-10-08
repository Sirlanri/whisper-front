<template>
	<div>
		<v-row>
			<reply
				v-for="(re, index) in replysData"
				:key="index"
				:name="re.name"
				:avatar="re.avatar"
				:haveRead="re.haveRead"
				:content="re.content"
				:id="re.id"
				:postid="re.postid"
			></reply>
			<div v-intersect="onIntersect"></div>
		</v-row>
	</div>
</template>

<script>
import reply from "@/components/SingleReply.vue";
export default {
	components: {
		reply,
	},
	data() {
		return {
			replysData: [],
			replyCount: 20,
			loadFlag: false,
			noReply: false,
		};
	},
	methods: {
		//获取全部reply详情
		getAllReply() {
			this.axios.get("getAllReply").then((res) => {
				if (res.status == 200) {
					this.replysData = res.data.replys;
				}
			});
		},

		//通过懒加载获取reply
		getReplys(num) {
			this.axios
				.get("getReplys", {
					params: { num: num },
				})
				.then((res) => {
					if (res.status == 200) {
						if (res.data.replys == null) {
							this.noReply = true;
							return;
						}
						res.data.replys.forEach((reply) => {
							this.replysData.push(reply);
						});
					}
				});
		},
		//区域检测函数（核心）
		onIntersect(entries) {
			// More information about these options
			// is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
			this.loadFlag = entries[0].isIntersecting;
		},
	},
	mounted() {
		this.getReplys(0);
	},

	watch: {
		loadFlag(flag) {
			if (this.noReply == true) {
				return;
			}
			if (flag == false || this.replysData.length == 0) {
				return;
			}
			this.getReplys(this.replyCount);
			this.replyCount += 20;
		},
	},
};
</script>

<style>
</style>