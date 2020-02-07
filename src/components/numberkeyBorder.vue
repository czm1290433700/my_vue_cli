<template>
    <div id="numberkeyBorder" v-show="borderShow">
        <div class="borderTitle">
            <span @click="hide()" @touchstart="touchstart($event)" @touchend="touchend($event)">完成</span>
        </div>
        <div class="borderBody">
            <i @touchstart="touchstart($event)" @touchend="touchend($event)">1</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)">2</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)">3</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)">4</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)">5</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)">6</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)">7</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)">8</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)">9</i>
            <i @touchstart="specialTouchstart($event)" @touchend="specialTouchend($event)" class="specialIcon">.</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)">0</i>
            <i @touchstart="specialTouchstart($event)" @touchend="specialTouchend($event)" class="specialIcon">删除</i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'numberkeyBorder',
    data() {
        return {
            borderShow: false
        }
    },
    methods: {
        /**
         * 显示事件
         */
        show: function(){
            this.borderShow = true;
        },
        /**
         * 隐藏事件
         */
        hide: function(){
            this.borderShow = false;
        },
        /**
         * 按钮按下事件
         */
        touchstart: function(item){
            item.currentTarget.style.backgroundColor = '#EBEDF0';
        },
        /**
         * 按钮松开事件
         */
        touchend: function(item){
            item.currentTarget.style.backgroundColor = '#fff';
        },
        /**
         * 小数点的按钮按下事件
         */
        specialTouchstart: function(item){
            item.currentTarget.style.backgroundColor = '#F2F5F5';
        },
        /**
         * 小数点的按钮松开事件
         */
        specialTouchend: function(item){
            item.currentTarget.style.backgroundColor = '#EBEDF0';
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/numberKeyBorder.css";
</style>