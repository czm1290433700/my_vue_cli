<template>
    <div class="input">
        <input type="text" placeholder="请输入内容" @focus="inputFocus($event)" @blur="inputBlur($event)">
        <img src="../assets/images/icon-clear.png" class="clear" @click="clearContent($event)"> 
    </div>
</template>

<script>
export default {
    name: 'input1', 
    methods: {
        /**
         * 输入框聚焦事件
         */
        inputFocus: function(item){
            item.currentTarget.parentNode.classList.add("active");
        },
        /**
         * 输入框失去焦点事件
         */
        inputBlur: function(item){
            item.currentTarget.parentNode.classList.remove("active");
        },
        /**
         * 清空输入框内容
         */
        clearContent: function(item){
            item.currentTarget.previousElementSibling.value = "";
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/input.css";
</style>