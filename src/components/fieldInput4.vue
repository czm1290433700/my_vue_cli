<template>
    <div id="fieldInput4">
        <div class="title">验证码</div>
        <input type="text" placeholder="输入验证码">
        <button type="button" ref="btn" @touchstart="touchstart()" @touchend="touchend()">获取验证码</button>
    </div>
</template>

<script>
export default {
    name: 'fieldInput4',
    methods: {
        /**
         * 按钮按下事件
         */
        touchstart: function(){
            this.$refs.btn.style.backgroundColor = "rgb(7, 167, 84)";
        },
        /**
         * 按钮松开事件
         */
        touchend: function(){
            this.$refs.btn.style.backgroundColor = "#07C160";
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/fieldInput.css";
</style>