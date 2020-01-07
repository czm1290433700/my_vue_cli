import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'

Vue.use(Router)

export default new Router({
  mode: 'history', // URL改变时，页面不会重新加载
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
