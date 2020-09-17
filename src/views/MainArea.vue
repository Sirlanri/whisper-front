<template>
	<div>
		<waterfall :cardsData="cardsData"></waterfall>
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
      cardsData:[]		
    };
	},
	mounted() {
		this.getAllPost();
	},
	computed: {
    refresh(){
      return this.$store.state.refreshFlag
    }
  },
  watch:{
    refresh(){
      this.getAllPost()
    }
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
	},
};
</script>

<style>
</style>