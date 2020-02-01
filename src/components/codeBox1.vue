<template>
    <div id="codeBox1">
        <!-- 因为pre标签的空行机制，所以这里需要将pre标签的代码写作一行 -->
        <pre class="body"><div class="title">{{codes.codeTitle}}</div><ol><li v-for="(item,index) in codes.code" :key="index">{{item}}</li><li></li></ol></pre>
    </div>
</template>

<script>
export default {
    name: 'codeBox1',
    props: ['codes']
}
</script>

<style scoped>
    @import "../style/pcComponents/codeBox.css";
</style>