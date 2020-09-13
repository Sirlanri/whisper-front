<template>
	<waterfall :cardsData="cardsData"></waterfall>
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
			cardsData: [
				{
					username: "深蓝",
					groupname: "source",
					avatar:
						"https://pic1.zhimg.com/v2-2dc154cd8b6adcc9af9804b0686e30eb_xl.jpg",
					content: "第一条信息的内容",
					topic: ["测试", "测试2"],
					time: "4/23 13:50",
					pics: [
						"https://blog.ri-co.cn/wp-content/uploads/2020/04/purple.jpg",
						"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
						"https://blog.ri-co.cn/wp-content/uploads/2020/04/black-white.jpg",
						"https://blog.ri-co.cn/wp-content/uploads/2020/04/red-white.jpg",
					],
					replays: [
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
					],
				},
				{
					username: "深蓝",
					groupname: "source",
					content: "第一条信息的内容",
					topic: ["测试", "测试2"],
					time: "4/23 13:50",
					pics: [
						"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
						"https://blog.ri-co.cn/wp-content/uploads/2020/04/black-white.jpg",
						"https://blog.ri-co.cn/wp-content/uploads/2020/04/red-white.jpg",
					],
					replays: [
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
					],
				},
				{
					username: "深蓝",
					groupname: "",
					content: "第2条信息的内容",
					topic: ["测试"],
					time: "4/23 13:50",
					pics: ["https://blog.ri-co.cn/wp-content/uploads/2020/04/blue.jpg"],
					replays: [
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
					],
				},
				{
					username: "深蓝",
					groupname: "",
					content: "第3条信息的内容",
					topic: ["测试"],
					time: "4/23 13:50",
					replays: [
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
					],
				},
				{
					username: "深蓝",
					groupname: "",
					content: "第4条信息的内容",
					topic: ["测试"],
					pics: ["https://blog.ri-co.cn/wp-content/uploads/2020/04/blue.jpg"],
					time: "4/23 13:50",
					replays: [
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
					],
				},
				{
					username: "深蓝",
					groupname: "小组1",
					content: "第5条信息的内容",
					topic: ["测试"],
					time: "4/23 13:50",
					replays: [
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
					],
				},
				{
					username: "深蓝",
					groupname: "小组1",
					content: "第5条信息的内容",
					topic: ["测试"],
					time: "4/23 13:50",
					replays: [
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
					],
				},
				{
					username: "深蓝",
					groupname: "小组1",
					content: "第5条信息的内容",
					topic: ["测试"],
					time: "4/23 13:50",
					replays: [
						{
							name: "visiter1",
							imgsrc:
								"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
							content: "精彩！",
						},
					],
				},
			],
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
	},
	mounted() {
		this.getAllPost();
	},
};
</script>

<style>
</style>