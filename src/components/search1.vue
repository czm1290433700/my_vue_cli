<template>
    <div id="search1">
        <div class="searchArea">
            <input type="text" ref="searchInput" placeholder="请输入关键词">
            <img src="../assets/images/icon-clear.png" @click="clearInput()">
        </div>
    </div>
</template>

<script>
export default {
    name: 'search1',
    methods: {
        /**
         * 清空文本框
         */
        clearInput: function(){
            this.$refs.searchInput.value = '';
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/search.css";
</style>