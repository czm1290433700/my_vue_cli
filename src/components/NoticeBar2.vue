<template>
    <div id="noticeBar2">
        <img src="../assets/images/trumpet.png"/>
        <div class="noticeArea" ref="noticeArea">
            <div class="notice" ref="notice">{{notice}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoticeBar2',
    props: ['notice']
}
</script>

<style scoped>
    @import "../style/mobileComponents/NoticeBar.css";
</style>