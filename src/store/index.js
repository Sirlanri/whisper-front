import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftdrawer:true,
    power:"visitor", //权限，visitor,user,admin
    userData:{
      name:"Rico深蓝",
      avatar:"https://blog.ri-co.cn/wp-content/uploads/2020/08/QQ截图20200821143241.jpg",
      mail:"mail@ri-co.cn",
      intro:"全沾工程师",
      bannar:"https://blog.ri-co.cn/wp-content/uploads/2020/04/purple.jpg",
      postCount:10,
      replyCount:20,
    },
  },
  getters:{
    isLogin(state){
      if (state.power=="user"||state.power=="admin") {
        return true
      }else{
        return false
      }
    }
  },
  mutations: {
    //控制LeftBar
    changeDrawer(state){
      state.leftdrawer=!state.leftdrawer
    },
    closeDrawer(state){
      state.leftdrawer=false
    },

    //控制登录权限，传入visitor user admin
    changePower(state,power){
      state.power=power
    },

    //获取用户信息后，写入
    setUserData(state,data){
      state.userData=data
    },
  },
  actions: {
  },
  modules: {
  }
})
