import Vue from 'vue'
import Router from 'vue-router'
import PCIndex from '@/page/index/pcIndex'
import MobileIndex from '@/page/index/mobileIndex'
import MobileCityArea from '@/components/mobileCityArea'
import EnMobileCityArea from '@/components/enMobileCityArea'
import CityArea from '@/components/cityArea'

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
      path: '/components/mobileCityArea',
      name: 'mobileCityArea',
      component: MobileCityArea
    },
    {
      path: '/components/enMobileCityArea',
      name: 'enMobileCityArea',
      component: EnMobileCityArea
    },
    {
      path: '/components/cityArea',
      name: 'cityArea',
      component: CityArea
    }
  ]
})
