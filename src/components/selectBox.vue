<template>
    <div id="selectBox">
        <div class="initBox" ref="initBox" v-show="!isSelected" @mouseover="selectOver()" @mouseleave="selectLeave()" @click="toggleMode()"></div>
        <div class="selectedBox" ref="selectedBox" v-show="isSelected" @click="toggleMode()">
            <div class="hook" ref="hook"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'selectedBox',
    props: ['color'],
    data() {
        return {
            isSelected: false
        }
    },
    mounted: function(){
        this.$refs.selectedBox.style.borderColor = this.$props.color.backgroundColor;
        this.$refs.selectedBox.style.backgroundColor = this.$props.color.backgroundColor;
        this.$refs.hook.style.borderColor = this.$props.color.hookColor;
    },
    methods: {
        /** 
         * 鼠标移入
         */
        selectOver: function(){
            this.$refs.initBox.style.borderColor = this.$props.color.backgroundColor;
        },
        /**
         * 鼠标移出
         */
        selectLeave: function(){
            this.$refs.initBox.style.borderColor = '#ddd';
        },
        /**
         * 切换状态
         */
        toggleMode: function(){
            this.isSelected = !this.isSelected;
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/select.css";
</style>