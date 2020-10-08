import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    particle: false,  //控制粒子背景
    leftdrawer: true,
    //用于组件间，传递刷新信息
    refreshFlag: false,
    clickUserName: "",   //用于页面跳转，用户页和群页面都用这个属性
    userData: {
      power: "visitor", //权限，visitor,user,admin
      name: "none",
      avatar: "",
      mail: "",
      intro: "",
      bannar: "",
      postCount: 0,
      replyCount: 0,
    },
  },
  getters: {
    isLogin(state) {
      if (state.userData.power == "user" || state.userData.power == "admin") {
        return true
      } else {
        return false
      }
    },

    //判断是否为admin
    isAdmin(state) {
      if (state.userData.power == "admin") {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    //控制LeftBar
    changeDrawer(state) {
      state.leftdrawer = !state.leftdrawer
    },
    closeDrawer(state) {
      state.leftdrawer = false
    },

    //控制登录权限，传入visitor user admin
    changePower(state, power) {
      state.userData.power = power
    },

    //获取用户信息后，写入
    setUserData(state, data) {
      state.userData = data
    },

    //点击其他用户名称，将name写入state
    setClickUserName(state, name) {
      state.clickUserName = name
    },

    //修改刷新flag
    refresh(state) {
      state.refreshFlag = !state.refreshFlag
    },

    //背景开关
    changeParticle(state) {
      state.particle = !state.particle
    }
  },
  actions: {
  },
  modules: {
  }
})
