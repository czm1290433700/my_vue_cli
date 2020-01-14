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
*{
    margin: 0;
    padding: 0;
}
li{
    list-style-type: none;
}
a{
    text-decoration: none;
}
#app {
  background-color: #fff;
}
</style>
