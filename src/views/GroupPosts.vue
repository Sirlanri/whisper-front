<template>
	<waterfall
		:cardsData="cardsData"
		@moreData="getMorePost"
		:nopost="nopost"
	></waterfall>
</template>

<script>
import waterfall from "@/components/WaterFall.vue";

export default {
	components: {
		waterfall,
	},
	data() {
		return {
			flag: "这是群组post",
			cardsData: [],
			nopost: false,
		};
	},

	methods: {
		//获取此群组的post
		getAllPost() {
			this.cardsData = [];
			this.axios
				.get("getPostByGroup", {
					params: { id: this.$store.state.clickUserName },
				})
				.then((res) => {
					if (res.status == 200) {
						this.cardsData = res.data.posts;
					}
				});
		},

		getMorePost(index) {
			this.axios
				.get("getPostByGroup", {
					params: { id: this.$store.state.clickUserName, num: index },
				})
				.then((res) => {
					if (res.status == 200) {
						if (res.data.posts == undefined) {
							this.nopost = true;
							return;
						}
						res.data.posts.forEach((post) => {
							this.cardsData.push(post);
						});
						//this.cardsData=res.data.posts
					}
				});
		},
	},
	mounted() {
		this.getAllPost();
	},
};
</script>

<style>
</style>