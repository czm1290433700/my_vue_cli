<template>
    <div id="loading1" ref="loading1">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
    </div>
</template>

<script>
export default {
    name: 'Loading1',
    props: ['color'],
    mounted () {
        if(this.$props.color){
            this.$refs.loading1.style.color = this.$props.color;
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/loading.css";
</style>