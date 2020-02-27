<template>
    <div id="noticeBar1">
        <img src="../assets/images/trumpet.png"/>
        <div class="noticeArea" ref="noticeArea">
            <div class="notice" ref="notice">{{notice}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoticeBar1',
    props: ['notice'],
    mounted () {
        var _this = this;
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