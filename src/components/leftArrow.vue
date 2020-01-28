<template>
    <div id="leftArrow">
        <div ref="arrow1"></div>
        <div ref="arrow2"></div>
    </div>
</template>

<script>
export default {
    name: 'leftArrow',
    props: ['arrowColor', 'backgroundColor'],
    mounted: function(){
        this.$refs.arrow1.style.borderRight = '8px solid ' + this.$props.arrowColor;
        this.$refs.arrow2.style.borderRight = '8px solid ' + this.$props.backgroundColor;
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/icon.css";
</style>