<template>
    <div class="header">
        <span class="arrow" @click="goBackHome()"></span>
        <span class="title">{{title}}</span>
    </div>
</template>

<script>
export default {
    name: 'pageHeader',
    props: ['title'],
    methods: {
        goBackHome: function(){
            this.$router.replace({
                path: '/mobileIndex'
            });
        }
    }
}
</script>

<style scoped>
    @import "../style/pageComponents/pageHeader.css";
</style>