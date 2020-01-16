import Vue from 'vue'
import Router from 'vue-router'
import PCIndex from '@/page/index/pcIndex'
import MobileIndex from '@/page/index/mobileIndex'
import mobileCityAreaPage from '@/page/mobilePage/mobileCityArea'
import enMobileCityAreaPage from '@/page/mobilePage/enMobileCityArea'
import cityArea from '@/page/pcPage/cityArea'
import slideShow from '@/page/pcPage/slideShow'
import lazyLoading from '@/page/mobilePage/lazyLoading'
import input from '@/page/pcPage/input'
import loading from '@/page/mobilePage/loading'

Vue.use(Router)

export default new Router({
  fallback: false, // 解决ie9兼容性问题
  mode: 'history', // URL改变时，页面不会重新加载
  routes: [
    {
      path: '',
      redirect: '/pcIndex'
    },
    {
      path: '/pcIndex',
      name: 'PCIndex',
      component: PCIndex
    },
    {
      path: '/mobileIndex',
      name: 'mobileIndex',
      component: MobileIndex
    },
    {
      path: '/mobilePage/mobileCityArea',
      name: 'mobileCityAreaPage',
      component: mobileCityAreaPage
    },
    {
      path: '/mobilePage/enMobileCityArea',
      name: 'enMobileCityAreaPage',
      component: enMobileCityAreaPage
    },
    {
      path: '/pcPage/cityArea',
      name: 'cityArea',
      component: cityArea
    },
    {
      path: '/pcPage/slideShow',
      name: 'slideShow',
      component: slideShow
    },
    {
      path: '/mobilePage/lazyLoading',
      name: 'lazyLoading',
      component: lazyLoading
    },
    {
      path: '/pcPage/input',
      name: 'input',
      component: input
    },
    {
      path: '/mobilePage/loading',
      name: 'loading',
      component: loading
    }
  ]
})
