<template>
    <div class="myVue">
      <h1>My VueCli</h1>
      <div class="components">
        <span class="title">components</span>
        <ul>
          <li v-for="item in components" :key="item.index" @click="clickConnect(item.url)">
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
      components:[{
        name: 'mobileCityArea 城市选择',
        url: '/mobilePage/mobileCityArea'
      },{
        name: 'enMobileCityArea 英文城市选择',
        url: '/mobilePage/enMobileCityArea'
      },{
        name: 'lazyLoading 图片懒加载',
        url: '/mobilePage/LazyLoading'
      },{
        name: 'loading 加载',
        url: 'mobilePage/loading'
      }]
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
    }
  }
}
</script>

<style scoped>
  @import "../../style/index/mobileIndex.css";
</style>
