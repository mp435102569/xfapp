import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'

  }, {
    path: '/home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/index.vue'),
    meta: {
      showNav: true,
      tit: "首页"
    }
  }, {
    path: '/class',
    component: () => import(/* webpackChunkName: "about" */ '@/views/class/index.vue'),
    meta: {
      showNav: true,
      tit: "分类"
    }
  }, {
    path: '/cart',
    component: () => import(/* webpackChunkName: "about" */ '@/views/cart/index.vue'),
    meta: {
      showNav: true,
      tit: "购物车"
    }
  }, {
    path: '/login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
    tit: "登录"
  }, {
    path: '/user',
    component: () => import(/* webpackChunkName: "about" */ '@/views/user/index.vue'),
    meta: {
      showNav: true,
      tit: "我的"
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  document.title=to.meta.tit||"新峰商城"
  next()
})

export default router
