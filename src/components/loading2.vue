<template>
    <div id="loading2" ref="loading2">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>
</template>

<script>
export default {
    name: 'loading2',
    props: ['color'],
    mounted () {
        if(this.$props.color){
            for(let i = 0; i < this.$refs.loading2.children.length; i++){
                this.$refs.loading2.children[i].style.backgroundColor = this.$props.color;
            }
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/loading.css";
</style>