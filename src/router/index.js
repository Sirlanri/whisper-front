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
        name:'',
        component: () => import('../views/Message.vue'),
        children:[
          {
            path:"",
            name:"replys",
            component:()=>import('../views/Replys.vue')
          }
        ]
      },
      {
        path:'group',
        name:'group',
        component: () => import('../views/Groups.vue')
      },
      {
        path:'groupPosts',
        name:'groupPosts',
        component: () => import('../views/GroupPosts.vue')
      },
      {
        path:'topic',
        name:'topic',
        component: () => import('../views/Topics.vue')
      },
      {
        path:'mine',
        name:'mine',
        component: () => import('../views/Mine.vue')
      },
      {
        path:'user',
        name:'user',
        component: () => import('../views/User.vue')
      },
      {
        path:'about',
        name:'about',
        component: () => import('../views/About.vue')
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
