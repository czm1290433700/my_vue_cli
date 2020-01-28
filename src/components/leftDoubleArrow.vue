<template>
    <div id="leftDoubleArrow">
        <div ref="arrow1"></div>
        <div ref="arrow2"></div>
        <div ref="arrow3"></div>
        <div ref="arrow4"></div>
    </div>
</template>

<script>
export default {
    name: 'leftDoubleArrow',
    props: ['arrowColor', 'backgroundColor'],
    data() {
        return {
            aColor: this.$props.arrowColor,
            bColor: this.$props.backgroundColor
        }
    },
    watch: {
        /**
         * 增加对父标签传进来对象的监听
         */
        arrowColor: function(val){
            this.aColor = val;
        },
        backgroundColor: function(val){
            this.bColor = val;
        }
    },
    mounted: function(){
        this.$refs.arrow1.style.borderRight = '8px solid ' + this.aColor;
        this.$refs.arrow2.style.borderRight = '8px solid ' + this.bColor;
        this.$refs.arrow3.style.borderRight = '8px solid ' + this.aColor;
        this.$refs.arrow4.style.borderRight = '8px solid ' + this.bColor;
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/icon.css";
</style>