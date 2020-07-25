import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children:[
      {
        path:'',
        name:'mainarea',
        component: () => import('../views/MainArea.vue')
      },
      {
        path:'message',
        name:'message',
        component: () => import('../views/Message.vue')
      },
      {
        path:'group',
        name:'group',
        component: () => import('../views/Groups.vue')
      },

    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
