<template>
	<v-row class="overy">
		<v-col lg="2" class="d-none d-lg-flex"></v-col>

		<v-col
			lg="3"
			md="5"
			sm="6"
			cols="12"
			offset-sm="0"
			offset-md="1"
			offset-lg="0"
		>
			<div class="flex-column" v-for="(card, index) in cards1" :key="index">
				<card
					v-on:tagname="openTag"
					:time="card.time"
					:avatar="card.avatar"
					:postid="card.id"
					:username="card.username"
					:groupname="card.groupname"
					:pics="card.pics"
					:groupid="card.groupid"
					:content="card.content"
					:topics="card.topic"
					:replays="card.replys"
				></card>
			</div>

			<div v-intersect="onIntersect"></div>
		</v-col>

		<v-col lg="3" md="5" sm="6" class="hidden-xs-and-down">
			<div class="flex-column" v-for="(card, index) in cards2" :key="index">
				<card
					v-on:tagname="openTag"
					:time="card.time"
					:avatar="card.avatar"
					:postid="card.id"
					:username="card.username"
					:groupname="card.groupname"
					:pics="card.pics"
					:groupid="card.groupid"
					:content="card.content"
					:topics="card.topic"
					:replays="card.replys"
				></card>
			</div>
			<div v-intersect="onIntersect"></div>
		</v-col>
		<v-col lg="3" md="0" class="hidden-md-and-down">
			<div class="flex-column" v-for="(card, index) in cards3" :key="index">
				<card
					v-on:tagname="openTag"
					:time="card.time"
					:avatar="card.avatar"
					:postid="card.id"
					:username="card.username"
					:groupname="card.groupname"
					:pics="card.pics"
					:groupid="card.groupid"
					:content="card.content"
					:topics="card.topic"
					:replays="card.replys"
				></card>
			</div>
			<div v-intersect="onIntersect"></div>
		</v-col>
	</v-row>
</template>

<script>
import card from "@/components/Card.vue";
export default {
	components: {
		card,
	},
	props: {
		cardsData: Array,
		//如果后端请求不到数据了，就停止请求
		nopost: Boolean,
	},
	data() {
		return {
			cards1: [],
			cards2: [],
			cards3: [],
			screenWidth: window.innerWidth,
			postCount: 20,
			loadFlag: false,
		};
	},
	methods: {
		//card组件点击tag后，显示此tag的全部推文
		openTag(tagname) {
			console.log("这个功能还没做哦~ ", tagname);
		},
		//将数据均匀地分到3列
		shunt3() {
			this.cards1 = [];
			this.cards2 = [];
			this.cards3 = [];
			if (this.cardsData == undefined) {
				return;
			}
			var len = this.cardsData.length;
			for (let index = 0; index < len / 3; index++) {
				this.cards1.push(this.cardsData[index * 3]);
				if (index * 3 + 1 < len) {
					this.cards2.push(this.cardsData[index * 3 + 1]);
					if (index * 3 + 2 < len) {
						this.cards3.push(this.cardsData[index * 3 + 2]);
					} else {
						break;
					}
				} else {
					break;
				}
			}
		},
		//将数据均匀地分到2列
		shunt2() {
			this.cards1 = [];
			this.cards2 = [];
			this.cards3 = [];
			var count2 = 0;
			this.cardsData.forEach((element) => {
				if (count2 % 2 == 0) {
					this.cards1.push(element);
					count2++;
				} else {
					this.cards2.push(element);
					count2++;
				}
			});
			//this.$store.commit("closeDrawer");
		},
		//只分到一列
		shunt1() {
			this.cards2 = [];
			this.cards3 = [];
			this.cards1 = this.cardsData;
			//this.$store.commit("closeDrawer");
		},

		//区域检测函数（核心）
		onIntersect(entries) {
			// More information about these options
			// is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
			this.loadFlag = entries[0].isIntersecting;
		},
  },
  
	mounted() {
		const that = this;
		window.onresize = () => {
			return (() => {
				window.screenWidth = document.body.clientWidth;
				that.screenWidth = window.screenWidth;
			})();
		};
	},

	watch: {
		cardsData: function () {
			if (this.screenWidth >= 1264) {
				this.shunt3();
				return;
			}
			if (this.screenWidth <= 600) {
				this.shunt1();
				return;
			} else {
				this.shunt2();
			}
		},
		screenWidth: function () {
			if (this.screenWidth >= 1264) {
				this.shunt3();
				return;
			}
			if (this.screenWidth <= 600) {
				this.shunt1();
				return;
			} else {
				this.shunt2();
			}
		},

		loadFlag(flag) {
			if (this.nopost == true) {
				return;
			}
			if (flag == false || this.cardsData.length == 0) {
				return;
			}
			this.$emit("moreData", this.postCount);
			this.postCount += 20;
		},
	},
};
</script>

<style>
.overy {
	overflow-y: hidden;
}
</style>