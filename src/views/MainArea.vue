<template>
	<div>
		<waterfall :cardsData="cardsData" @moreData="getMorePost" :nopost="nopost">
		</waterfall>
	</div>
</template>

<script>
import waterfall from "@/components/WaterFall.vue";
export default {
	components: {
		waterfall,
	},
	data() {
		return {
			cardsData: [],
			nopost: false,
		};
	},
	mounted() {
		this.getAllPost();
	},
	computed: {
		refresh() {
			return this.$store.state.refreshFlag;
		},
	},
	watch: {
		refresh() {
			this.getAllPost();
		},
	},

	methods: {
		//获取全部post
		getAllPost() {
			this.cardsData = [];

			this.axios.get("getAllPost").then((res) => {
				if (res.status == 200) {
					this.cardsData = res.data.posts;
				}
			});
		},
		getMorePost(index) {
			this.axios
				.get("getLazyPost", {
					params: { num: index },
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
};
</script>

<style>
</style>