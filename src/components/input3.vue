<template>
    <div class="input">
        <input type="text" placeholder="请输入内容" ref="textInput" @input="initArray()" @focus="inputFocus($event)" @blur="inputBlur($event)">
        <img src="../assets/images/icon-clear.png" class="clear" @click="clearContent($event)"> 
        <div class="queryArea" ref="queryArea">
            <ul>
                <li v-for="item in array" :key="item.id" @click="selectItem($event)">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'input3', 
    data() {
        return {
            array: []
        }
    },
    props: ['queryArray'],
    mounted: function(){
        this.array = this.$props.queryArray;
    },
    methods: {
        /**
         * 输入框聚焦事件
         */
        inputFocus: function(item){
            item.currentTarget.parentNode.classList.add("active");
            this.$refs.queryArea.style.display = "block";
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
        },
        /**
         * 初始化模糊查询数组
         */
        initArray: function(){
            let res = [], val = this.$refs.textInput.value;
            this.$props.queryArray.forEach(element => {
                if(element.indexOf(val) != -1){
                    res.push(element);
                }
            });
            this.array = res;
        },
        /**
         * 选中模糊查询选项
         */
        selectItem: function(item){
            this.$refs.textInput.value = item.currentTarget.textContent;
            this.$refs.queryArea.style.display = "none";
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/input.css";
</style>