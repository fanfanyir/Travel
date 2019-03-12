import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index',
    name: 'Index',
    component: () => import('@/pages/index/Index')
  }, {
    path: '/iviews',
    name: 'iviews',
    component: () => import('@/pages/index/IviewTry')
  }, {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
