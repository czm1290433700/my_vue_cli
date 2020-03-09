<template>
    <div class="myVue">
      <h1>My VueCli<span class="github" @click="goGithub()">github</span></h1>
      <div class="components">
        <span class="title">插件组件</span>
        <ul>
          <li v-for="item in pluginComponents" :key="item.index" @click="clickConnect(item.url)">
            <span class="name">{{item.name}}</span>
            <span class="arrow"></span>
          </li>
        </ul>
        <span class="title">页面组件</span>
        <ul>
          <li v-for="item in pageComponents" :key="item.index" @click="clickConnect(item.url)">
            <span class="name">{{item.name}}</span>
            <span class="arrow"></span>
          </li>
        </ul>
        <span class="title">反馈组件</span>
        <ul>
          <li v-for="item in callbackComponents" :key="item.index" @click="clickConnect(item.url)">
            <span class="name">{{item.name}}</span>
            <span class="arrow"></span>
          </li>
        </ul>
        <span class="title">展示组件</span>
        <ul>
          <li v-for="item in showComponents" :key="item.index" @click="clickConnect(item.url)">
            <span class="name">{{item.name}}</span>
            <span class="arrow"></span>
          </li>
        </ul>
        <span class="title">导航组件</span>
        <ul>
          <li v-for="item in navigationComponents" :key="item.index" @click="clickConnect(item.url)">
            <span class="name">{{item.name}}</span>
            <span class="arrow"></span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'mobileIndex',
  data() {
    return {
      pluginComponents:[
        {
          name: 'mobileCityArea 城市选择',
          url: '/mobilePage/mobileCityArea'
        },
        {
          name: 'enMobileCityArea 英文城市选择',
          url: '/mobilePage/enMobileCityArea'
        }
      ],
      pageComponents:[
        {
          name: 'loading 加载',
          url: 'mobilePage/loading'
        },
        {
          name: 'lazyLoading 图片懒加载',
          url: '/mobilePage/LazyLoading'
        },
        {
          name: 'calendar 日历',
          url: 'mobilePage/calendar'
        },
        {
          name: 'DateTimePicker 时间选择',
          url: '/mobilePage/DataTimePicker'
        },
        {
          name: 'NumberkeyBorder 数字键盘',
          url: '/mobilePage/NumberkeyBorder'
        },
        {
          name: 'PasswordInput 密码输入框',
          url: '/mobilePage/passwordInput'
        },
        {
          name: 'FieldInput 输入框',
          url: '/mobilePage/FieldInput'
        },
        {
          name: 'Search 搜索框',
          url: '/mobilePage/search'
        }
      ],
      callbackComponents:[
        {
          name: 'maskLayer 遮罩层',
          url: '/mobilePage/maskLayer'
        },
        {
          name: 'popWindow 弹窗',
          url: '/mobilePage/popWindow'
        },
        {
          name: 'popupBox 弹出层',
          url: '/mobilePage/popupBox'
        },
        {
          name: 'toast 轻提示',
          url: '/mobilePage/toast'
        }
      ],
      showComponents:[
        {
          name: 'Circle 环形进度条',
          url: '/mobilePage/Circle'
        },
        {
          name: 'CountDown 倒计时',
          url: '/mobilePage/CountDown'
        },
        {
          name: 'Divider 分割线',
          url: '/mobilePage/Divider'
        },
        {
          name: 'ImagePreview 图片预览',
          url: '/mobilePage/ImagePreview'
        },
        {
          name: 'NoticeBar 通知栏',
          url: '/mobilePage/NoticeBar'
        },
        {
          name: 'Steps 步骤条',
          url: '/mobilePage/Steps'
        },
        {
          name: 'Swipe 轮播',
          url: '/mobilePage/Swipe'
        }
      ],
      navigationComponents:[
        {
          name: 'IndexBar 索引栏',
          url: '/mobilePage/IndexBar'
        },
        {
          name: 'Pagination 分页',
          url: '/mobilePage/Pagination'
        },
        {
          name: 'TreeSelect 分类选择',
          url: '/mobilePage/treeSelect'
        }
      ]
    }
  },
  methods: {
    /**
     * 点击链接跳转
     */
    clickConnect: function(url){
      this.$router.replace({
        path: url
      })
    },
    /**
     * 跳转github
     */
    goGithub: function(){
      window.location.href = "https://github.com/czm1290433700/my_vue_cli";
    }
  }
}
</script>

<style scoped>
  @import "../../style/index/mobileIndex.css";
</style>
