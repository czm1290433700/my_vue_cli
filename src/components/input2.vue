<template>
    <div class="input">
        <input type="password" placeholder="请输入密码" @focus="inputFocus($event)" @blur="inputBlur($event)">
        <img src="../assets/images/icon-pwd-close.png" class="eye" @click="cutMode($event)"> 
    </div>
</template>

<script>
export default {
    name: 'input2', 
    methods: {
        /**
         * 密码框聚焦事件
         */
        inputFocus: function(item){
            item.currentTarget.parentNode.classList.add("active");
        },
        /**
         * 密码框失去焦点事件
         */
        inputBlur: function(item){
            item.currentTarget.parentNode.classList.remove("active");
        },
        /**
         * 切换密码框状态
         */
        cutMode: function(item){
            if(item.currentTarget.previousElementSibling.type == "password"){
                item.currentTarget.previousElementSibling.type = "text";
                item.currentTarget.src = require("@/assets/images/icon-pwd-open.png");
            }else{
                item.currentTarget.previousElementSibling.type = "password";
                item.currentTarget.src = require("@/assets/images/icon-pwd-close.png");
            }
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/input.css";
</style>