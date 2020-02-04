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
        },
        {
          name: 'calendar 日历',
          url: 'mobilePage/calendar'
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
          name: 'maskLayer 遮罩层',
          url: '/mobilePage/maskLayer'
        },
        {
          name: 'popWindow 弹窗',
          url: '/mobilePage/popWindow'
        },
        {
          name: 'toast 轻提示',
          url: '/mobilePage/toast'
        },
        {
          name: 'DateTimePicker 时间选择',
          url: '/mobilePage/dataTimePicker'
        },
        {
          name: 'NumberKeyBorder 数字键盘',
          url: '/mobilePage/NumberKeyBorder'
        },
        {
          name: 'PasswordInput 密码输入框',
          url: '/mobilePage/passwordInput'
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
