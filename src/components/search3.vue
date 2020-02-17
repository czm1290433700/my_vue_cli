<template>
    <div id="search3" ref="search">
        <div class="searchArea">
            <input type="text" ref="searchInput" placeholder="请输入关键词">
            <img src="../assets/images/icon-clear.png" @click="clearInput()">
        </div>
    </div>
</template>

<script>
export default {
    name: 'search3',
    props: ['backgroundColor'],
    mounted () {
        this.$refs.search.style.backgroundColor = this.$props.backgroundColor;
    },
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