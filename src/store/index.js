import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftdrawer:true
  },
  mutations: {
    changeDrawer(state){
      state.leftdrawer=!state.leftdrawer
    }
  },
  actions: {
  },
  modules: {
  }
})
