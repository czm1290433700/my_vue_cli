<template>
    <div id="noticeBar3">
        <div class="noticeArea" ref="noticeArea">
            <div class="notice" ref="notice">{{notice}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoticeBar3',
    props: ['notice']
}
</script>

<style scoped>
    @import "../style/mobileComponents/NoticeBar.css";
</style>