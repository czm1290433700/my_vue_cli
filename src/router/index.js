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
import graph from '@/page/pcPage/graph'
import calendarWidgets from '@/page/pcPage/calendarWidgets'
import shuttleBox from '@/page/pcPage/shuttleBox'
import icon from '@/page/pcPage/icon'
import select from '@/page/pcPage/select'
import table from '@/page/pcPage/table'
import page from '@/page/pcPage/page'
import treeBox from '@/page/pcPage/treeBox'
import codeBox from '@/page/pcPage/codeBox'
import mobileCalendar from '@/page/mobilePage/calendar'
import maskLayer from '@/page/mobilePage/maskLayer'
import popWindow from '@/page/mobilePage/popWindow'
import toast from '@/page/mobilePage/toast'
import DateTimePicker from '@/page/mobilePage/DateTimePicker'
import popupBox from '@/page/mobilePage/popupBox'
import passwordInput from '@/page/mobilePage/passwordInput'

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
    },
    {
      path: '/pcPage/graph',
      name: 'graph',
      component: graph
    },
    {
      path: '/pcPage/calendarWidgets',
      name: 'calendarWidgets',
      component: calendarWidgets
    },
    {
      path: '/pcPage/shuttleBox',
      name: 'shuttleBox',
      component: shuttleBox
    },
    {
      path: '/pcPage/icon',
      name: 'icon',
      component: icon
    },
    {
      path: '/pcPage/select',
      name: 'select',
      component: select
    },
    {
      path: '/pcPage/table',
      name: 'table',
      component: table
    },{
      path: '/pcPage/page',
      name: 'page',
      component: page
    },{
      path: '/pcPage/treeBox',
      name: 'treeBoxPage',
      component: treeBox
    },{
      path: '/pcPage/codeBox',
      name: 'codeBoxPage',
      component: codeBox
    },{
      path: '/mobilePage/calendar',
      name: 'mobileCalendar',
      component: mobileCalendar
    },
    {
      path: '/mobilePage/maskLayer',
      name: 'maskLayer',
      component: maskLayer
    },
    {
      path: '/mobilePage/popWindow',
      name: 'popWindow',
      component: popWindow
    },
    {
      path: '/mobilePage/toast',
      name: 'toast',
      component: toast
    },
    {
      path: '/mobilePage/DataTimePicker',
      name: 'DateTimePicker',
      component: DateTimePicker
    },
    {
      path: '/mobilePage/popupBox',
      name: 'popupBox',
      component: popupBox
    },
    {
      path: '/mobilePage/passwordInput',
      name: 'passwordInput',
      component: passwordInput
    }
  ]
})
