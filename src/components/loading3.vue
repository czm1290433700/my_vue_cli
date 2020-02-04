<template>
    <div id="loading3" ref="loading3">
        <div class="round1"></div>
        <div class="round2"></div>
        <div class="round3"></div>
    </div>
</template>

<script>
export default {
    name: 'loading3',
    props: ['color'],
    mounted () {
        if(this.$props.color){
            for(let i = 0; i < this.$refs.loading3.children.length; i++){
                this.$refs.loading3.children[i].style.backgroundColor = this.$props.color;
            }
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/loading.css";
</style>