<template>
    <div id="pcIndex">
      <div class="header">
        <span class="title">My VueCli</span>
        <ul>
          <li class="active">示例</li>
          <li @click="goGitHub()">github</li>
        </ul>
      </div>
      <div class="nav">
        <ul v-for="item in content" :key="item.id">
          <li>
            <span class="title" @click="clickElement($event)">{{item.name}}<i></i></span>
            <dl>
              <dd v-for="item in item.construction" :key="item.id" @click="cutBodyContent(item.url)">{{item.name}}</dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li class="active">预览</li>
        </ul>
        <div class="body-content">
          <iframe src="/pcPage/cityArea" ref="bodyContent"></iframe>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'pcIndex',
  data() {
    return {
      content: [{
        name: '组件',
        construction:[
        {
          name: 'CityArea 城市选择',
          url: '/pcPage/cityArea'
        },
        {
          name: 'slideShow 轮播图',
          url: '/pcPage/slideShow'
        }]
      }]
    }
  },
  mounted () {
    /**禁掉body的自带滚动栏，避免与iframe的重复影响页面样式 */
    document.body.style.overflowY = "hidden";
  },
  methods: {
    /**
     * 跳转github
     */
    goGitHub: function(){
      window.location.href = "https://github.com/czm1290433700/my_vue_cli";
    },
    /**
     * 点击导航元素
     */
    clickElement: function(item){
      let dlElement = item.currentTarget.nextElementSibling;
      if(dlElement.style.display == "none" || dlElement.style.display == ""){
        dlElement.style.display = "block";
      }else{
        dlElement.style.display = "none"
      }
    },
    /**
     * 切换bodyContent
     */
    cutBodyContent: function(url){
      this.$refs.bodyContent.src = url;
    }
  }
}
</script>

<style scoped>
  @import "../../style/index/pcIndex.css";
</style>