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
    props: ['color'],
    mounted: function(){
        this.$refs.arrow1.style.borderRight = '8px solid ' + this.$props.color.arrowColor;
        this.$refs.arrow2.style.borderRight = '8px solid ' + this.$props.color.backgroundColor;
        this.$refs.arrow3.style.borderRight = '8px solid ' + this.$props.color.arrowColor;
        this.$refs.arrow4.style.borderRight = '8px solid ' + this.$props.color.backgroundColor;
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/icon.css";
</style>