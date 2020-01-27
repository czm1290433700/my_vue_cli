<template>
    <div id="rightDoubleArrow">
        <div ref="arrow1"></div>
        <div ref="arrow2"></div>
        <div ref="arrow3"></div>
        <div ref="arrow4"></div>
    </div>
</template>

<script>
export default {
    name: 'rightDoubleArrow',
    props: ['color'],
    mounted: function(){
        this.$refs.arrow1.style.borderLeft = '8px solid ' + this.$props.color.arrowColor;
        this.$refs.arrow2.style.borderLeft= '8px solid ' + this.$props.color.backgroundColor;
        this.$refs.arrow3.style.borderLeft = '8px solid ' + this.$props.color.arrowColor;
        this.$refs.arrow4.style.borderLeft= '8px solid ' + this.$props.color.backgroundColor;
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/icon.css";
</style>