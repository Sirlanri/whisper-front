import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children: [
      {
        path: '',
        name: 'mainarea',
        component: () => import('../views/MainArea.vue'),
        meta: {
          title: "首页 Whisper轻语"
        }
      },
      {
        path: 'message',
        name: '',
        component: () => import('../views/Message.vue'),
        children: [
          {
            path: "",
            name: "replys",
            component: () => import('../views/Replys.vue'),
            meta: {
              title: "评论 Whisper轻语"
            }
          }
        ],

      },
      {
        path: 'group',
        name: 'group',
        component: () => import('../views/Groups.vue'),
        meta: {
          title: "群列表 Whisper轻语"
        }
      },
      {
        path: 'groupPosts',
        name: 'groupPosts',
        component: () => import('../views/GroupPosts.vue'),
        meta: {
          title: "群内推文 Whisper轻语"
        }
      },
      {
        path: 'topic',
        name: 'topic',
        component: () => import('../views/Topics.vue'),
        meta: {
          title: "话题列表 Whisper轻语"
        }
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/Mine.vue'),
        meta: {
          title: "我的 Whisper轻语"
        }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/User.vue'),
        meta: {
          title: "用户信息 Whisper轻语"
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
          title: "关于 Whisper轻语"
        }
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
