<template>
	<div>
		<waterfall :cardsData="cardsData" @moreData="getMorePost"></waterfall>
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
      cardsData:[],
      index:0,
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
    getMorePost(index){
      console.log("触发了懒加载")
      this.axios.get('getLazyPost',{
        params:{num:index}
      }).then(res=>{
        if (res.status==200) {
          this.cardsData.push.apply(this.cardsData,res.data.posts)
          //this.cardsData=res.data.posts
        }
      })
    }
	},
};
</script>

<style>
</style>