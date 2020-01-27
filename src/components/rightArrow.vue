<template>
    <div id="rightArrow">
        <div ref="arrow1"></div>
        <div ref="arrow2"></div>
    </div>
</template>

<script>
export default {
    name: 'rightArrow',
    props: ['color'],
    mounted: function(){
        this.$refs.arrow1.style.borderLeft = '8px solid ' + this.$props.color.arrowColor;
        this.$refs.arrow2.style.borderLeft = '8px solid ' + this.$props.color.backgroundColor;
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/icon.css";
</style>