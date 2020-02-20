<template>
    <div id="Divider2">
        <div class="divider"></div>
        <span class="text">{{text}}</span>
        <div class="divider"></div>
    </div>
</template>

<script>
export default {
    name: 'Divider2',
    props: ['text']
}
</script>

<style scoped>
    @import "../style/mobileComponents/Divider.css";
</style>