<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function(){
    if(this.isMobile()){
      if(this.$route.path == '/pcIndex'){
        this.$router.replace({
          path: '/mobileIndex'
        })
      }
    }else{
      if(this.$route.path == '/mobileIndex'){
        this.$router.replace({
          path: '/pcIndex'
        })
      }
    }
  },
  methods: {
    /**
     * 判断是手机端还是pc端
     */
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  }
}
</script>

<style>
@import "./style/global/global.css";
#app {
  background-color: #fff;
}
</style>
