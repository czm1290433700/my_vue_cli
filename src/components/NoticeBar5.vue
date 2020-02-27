<template>
    <div id="noticeBar5" ref="noticeBar">
        <img :src="noticeData.noticeImg"/>
        <div class="noticeArea" ref="noticeArea">
            <div class="notice" ref="notice">{{noticeData.notice}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoticeBar5',
    props: ['noticeData'],
    mounted () {
        var _this = this;
        /**初始化颜色 */
        this.$refs.noticeBar.style.backgroundColor = this.$props.noticeData.backgroundColor;
        this.$refs.noticeBar.style.color = this.$props.noticeData.color;
        /**初始化轮播动画 */
        var noticeWidth =  _this.$refs.notice.offsetWidth,
            areaWidth = _this.$refs.noticeArea.offsetWidth,
            fontSize = document.documentElement.style.fontSize.split('px')[0],
            timer = setInterval(function(){
                if(Math.abs(_this.$refs.notice.offsetLeft) > noticeWidth + areaWidth){
                    _this.$refs.notice.style.left = 0;
                }else{
                    _this.$refs.notice.style.left = _this.$refs.notice.offsetLeft / fontSize - 0.02 + 'rem';
                }
            }, 30)
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/NoticeBar.css";
</style>