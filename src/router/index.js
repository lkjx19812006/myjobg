import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
import Exp from '@/views/exp'
import GoodAt from '@/views/goodAt'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: '加载中'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '基本信息'
      }
    },
    {
      path: '/exp',
      name: 'exp',
      component: Exp,
      meta: {
        title: '项目经验'
      }
    },
    {
      path: '/goodAt',
      name: 'goodAt',
      component: GoodAt,
      meta: {
        title: '擅长领域'
      }
    },
  ]
})
