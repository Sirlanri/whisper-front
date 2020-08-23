import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftdrawer:true,
    power:"user", //权限，visitor,user,admin
    userData:{
      name:"",
      avatar:"",
      mail:"",
      intro:"",
      bannar:""
    },
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
    }
  },
  actions: {
  },
  modules: {
  }
})
