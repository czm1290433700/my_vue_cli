import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import MobileCityArea from '@/components/mobileCityArea'
import EnMobileCityArea from '@/components/enMobileCityArea'
import CityArea from '@/components/cityArea'

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
