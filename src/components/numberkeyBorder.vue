<template>
    <div id="numberkeyBorder" v-show="borderShow">
        <div class="borderTitle">
            <span @click="hide()" @touchstart="touchstart($event)" @touchend="touchend($event)">完成</span>
        </div>
        <div class="borderBody">
            <i @touchstart="touchstart($event)" @touchend="touchend($event)" @click="addArray(1)">1</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)" @click="addArray(2)">2</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)" @click="addArray(3)">3</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)" @click="addArray(4)">4</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)" @click="addArray(5)">5</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)" @click="addArray(6)">6</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)" @click="addArray(7)">7</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)" @click="addArray(8)">8</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)" @click="addArray(9)">9</i>
            <i @touchstart="specialTouchstart($event)" @touchend="specialTouchend($event)" class="specialIcon" @click="addArray('.')">.</i>
            <i @touchstart="touchstart($event)" @touchend="touchend($event)" @click="addArray(0)">0</i>
            <i @touchstart="specialTouchstart($event)" @touchend="specialTouchend($event)" class="specialIcon" @click="removeArray()">删除</i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'numberkeyBorder',
    props: ['storageDigit'],
    data() {
        return {
            borderShow: false,
            dataArray: []
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
        },
        /**
         * 添加数组元素
         */
        addArray: function(item){
            if(this.$props.storageDigit && this.$props.storageDigit <= this.dataArray.length){
                return ;
            }else{
                this.dataArray.splice(this.dataArray.length, 0, item);
            }
        },
        /**
         * 移除数组元素
         */
        removeArray: function(){
            if(this.dataArray.length > 0){
                this.dataArray.splice(this.dataArray.length - 1, 1);
            }
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/numberKeyBorder.css";
</style>