<template>
    <div id="search2">
        <div class="searchArea">
            <input type="text" ref="searchInput" placeholder="请输入关键词">
            <img src="../assets/images/icon-clear.png" @click="clearInput()">
        </div>
        <button type="button" ref="searchBtn" @touchstart="touchstart()" @touchend="touchend()" class="searchButton">搜索</button>
    </div>
</template>

<script>
export default {
    name: 'search2',
    methods: {
        /**
         * 清空文本框
         */
        clearInput: function(){
            this.$refs.searchInput.value = '';
        },
        /**
         * 按钮按下事件
         */
        touchstart: function(){
            this.$refs.searchBtn.style.backgroundColor = '#F7F8FA';
        },
        /**
         * 按钮松开事件
         */
        touchend: function(){
            this.$refs.searchBtn.style.backgroundColor = '#fff';
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/search.css";
</style>