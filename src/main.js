import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'core-js/stable'
import 'regenerator-runtime/runtime';

import {Carousel,CarouselItem,Image,Avatar} from 'element-ui'
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Avatar)

import VueParticles from 'vue-particles'  
Vue.use(VueParticles) 
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
