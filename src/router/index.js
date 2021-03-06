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
import popupBox from '@/page/mobilePage/popupBox'
import passwordInput from '@/page/mobilePage/passwordInput'
import numberkeyBorder from '@/page/mobilePage/numberkeyBorder'
import FieldInput from '@/page/mobilePage/FieldInput'
import search from '@/page/mobilePage/search'
import CountDown from '@/page/mobilePage/CountDown'
import Divider from '@/page/mobilePage/Divider'
import NoticeBar from '@/page/mobilePage/NoticeBar'
import steps from '@/page/mobilePage/steps'
import IndexBar from '@/page/mobilePage/IndexBar'
import Pagination from '@/page/mobilePage/Pagination'
import treeSelect from '@/page/mobilePage/treeSelect'
import grade from '@/page/pcPage/grade'
import timeline from '@/page/pcPage/timeline'
import slideShow_introduce from '@/page/introduces/slideShow'
import cityArea_introduce from '@/page/introduces/cityArea'
import calendar_introduce from '@/page/introduces/calendar'
import shuttleBox_introduce from '@/page/introduces/shuttleBox'
import input_introduce from '@/page/introduces/input'
import table_introduce from '@/page/introduces/table'
import page_introduce from '@/page/introduces/page'
import select_introduce from '@/page/introduces/select'
import graph_introduce from '@/page/introduces/graph'
import codeBox_introduce from '@/page/introduces/codeBox'
import icon_introduce from '@/page/introduces/icon'
import grade_introduce from '@/page/introduces/grade'
import timeline_introduce from '@/page/introduces/timeline'
import testComponent from '@/page/pcPage/testComponent'

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
    },
    {
      path: '/pcPage/page',
      name: 'page',
      component: page
    },
    {
      path: '/pcPage/treeBox',
      name: 'treeBoxPage',
      component: treeBox
    },
    {
      path: '/pcPage/codeBox',
      name: 'codeBoxPage',
      component: codeBox
    },
    {
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
      path: '/mobilePage/popupBox',
      name: 'popupBox',
      component: popupBox
    },
    {
      path: '/mobilePage/passwordInput',
      name: 'passwordInput',
      component: passwordInput
    },
    {
      path: '/mobilePage/numberkeyBorder',
      name: 'numberkeyBorder',
      component: numberkeyBorder
    },
    {
      path: '/mobilePage/FieldInput',
      name: 'FieldInput',
      component: FieldInput
    },
    {
      path: '/mobilePage/search',
      name: 'search',
      component: search
    },
    {
      path: '/mobilePage/CountDown',
      name: 'CountDown',
      component: CountDown
    },
    {
      path: '/mobilePage/Divider',
      name: 'Divider',
      component: Divider
    },
    {
      path: '/mobilePage/NoticeBar',
      name: 'NoticeBar',
      component: NoticeBar
    },
    {
      path: '/mobilePage/Steps',
      name: 'steps',
      component: steps
    },
    {
      path: '/mobilePage/IndexBar',
      name: 'IndexBar',
      component: IndexBar
    },
    {
      path: '/mobilePage/Pagination',
      name: 'Pagination',
      component: Pagination
    },
    {
      path: '/mobilePage/treeSelect',
      name: 'treeSelect',
      component: treeSelect
    },
    {
      path: '/pcPage/grade',
      name: 'grade',
      component: grade
    },
    {
      path: '/pcPage/timeline',
      name: 'timeline',
      component: timeline
    },
    {
      path: '/introduces/slideShow',
      name: 'slideShow_introduce',
      component: slideShow_introduce
    },
    {
      path: '/introduces/cityArea',
      name: 'cityArea_introduce',
      component: cityArea_introduce
    },
    {
      path: '/introduces/calendarWidgets',
      name: 'calendar_introduce',
      component: calendar_introduce
    },
    {
      path: '/introduces/shuttleBox', 
      name: 'shuttleBox_introduce',
      component: shuttleBox_introduce
    },
    {
      path: '/introduces/input',
      name: 'input_introduce',
      component: input_introduce
    },
    {
      path: '/introduces/table',
      name: 'table_introduce',
      component: table_introduce
    },
    {
      path: '/introduces/page',
      name: 'page_introduce',
      component: page_introduce
    },
    {
      path: '/introduces/select',
      name: 'select_introduce',
      component: select_introduce
    },
    {
      path: '/introduces/graph',
      name: 'graph_introduce',
      component: graph_introduce
    },
    {
      path: '/introduces/codeBox',
      name: 'codeBox_introduce',
      component: codeBox_introduce
    },
    {
      path: '/introduces/icon',
      name: 'icon_introduce',
      component: icon_introduce
    },
    {
      path: '/introduces/grade',
      name: 'grade_introduce',
      component: grade_introduce
    },
    {
      path: '/introduces/timeline',
      name: 'timeline_introduce',
      component: timeline_introduce
    },
    {
      path: '/pcPage/testComponent',
      name: 'testComponent',
      component: testComponent
    }
  ]
})
