<template>
    <div id="popupBox" ref="popupBox">
        <span class="closeBtn" @click="hide()">X</span>
        <slot name="popupContent"></slot>
    </div>
</template>

<script>
export default {
    name: 'popupBox',
    data() {
        return {
            timer: new Function(),
            offsetBottom: 0
        }
    },
    mounted () {
        /**初始化弹出层隐藏 */
        this.$refs.popupBox.style.bottom = this.$refs.popupBox.offsetHeight / -37.5 + 'rem';
        this.offsetBottom = this.$refs.popupBox.offsetHeight / -37.5;
    },
    methods: {
        /**
         * 弹出层显示
         */
        show: function(){
            var _this = this;
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                if(_this.offsetBottom >= 0){
                    clearInterval(_this.timer);
                }else{
                    _this.offsetBottom = _this.offsetBottom + 0.5 > 0 ? 0 : _this.offsetBottom + 0.5;
                    _this.$refs.popupBox.style.bottom = _this.offsetBottom + 'rem';
                }
            }, 20)
        },
        /**
         * 弹出层隐藏
         */
        hide: function(){
            var _this = this,
                height = _this.$refs.popupBox.offsetHeight / -37.5;
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                if(_this.offsetBottom <= height){
                    clearInterval(_this.timer);
                }else{
                    _this.offsetBottom = _this.offsetBottom - 0.5 < height ? height : _this.offsetBottom - 0.5;
                    _this.$refs.popupBox.style.bottom = _this.offsetBottom + 'rem';
                }
            }, 20)
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/popupBox.css";
</style>