<template>
    <div id="pcIndex">
      <div></div>
      <div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'pcIndex',
  data() {
    return {
      components: [{
        name: 'CityArea 城市选择',
        url: '/pcPage/cityArea'
      },{
        name: 'slideShow 轮播图',
        url: '/pcPage/slideShow'
      }]
    }
  }
}
</script>

<style scoped>
  @import "../../style/index/pcIndex.css";
</style>