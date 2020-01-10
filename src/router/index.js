import Vue from 'vue'
import Router from 'vue-router'
import PCIndex from '@/page/index/pcIndex'
import MobileIndex from '@/page/index/mobileIndex'
import mobileCityAreaPage from '@/page/mobilePage/mobileCityArea'
import enMobileCityAreaPage from '@/page/mobilePage/enMobileCityArea'
import cityArea from '@/components/cityArea'
import slideShow1 from '@/components/slideShow1'
import slideShow2 from '@/components/slideShow2'
import slideShow3 from '@/components/slideShow3'

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
      path: '/components/cityArea',
      name: 'cityArea',
      component: cityArea
    },
    {
      path: '/components/slideShow1',
      name: 'slideShow1',
      component: slideShow1
    },
    {
      path: '/components/slideShow2',
      name: 'slideShow2',
      component: slideShow2
    },
    {
      path: '/components/slideShow3',
      name: 'slideShow3',
      component: slideShow3
    }
  ]
})
