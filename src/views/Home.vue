<template>
	<div class="home">
		<topleft></topleft>
		<div class="whitearea"></div>

		<router-view></router-view>
	</div>
</template>

<script>
// @ is an alias to /src
import topleft from "@/components/TopLeft.vue";

export default {
	name: "Home",
	components: {
		topleft,
	},
	created() {
		this.checkLogin();
	},
	methods: {
		//从cookie中读取数据，检测是否已登录
		checkLogin() {
			if (!this.$store.getters.isLogin) {
				this.axios.get("getUserInfoByCookie").then((res) => {
					if (res.status == 200) {
						this.$store.commit("setUserData", res.data);
					}
				});
			}
		},
	},
};
</script>

<style>
.whitearea {
	height: 60px;
	opacity: 0;
}
.home {
	/*background-image: url("https://blog.ri-co.cn/wp-content/uploads/2020/04/black-white.jpg");
  */
	background-attachment: fixed;
	min-height: 100vh;
	overflow-y: hidden !important;
	padding: 0 1rem;
}
.background {
	position: absolute;
	display: block;
	top: 0;
	left: 0;
	z-index: 0;
}
</style>