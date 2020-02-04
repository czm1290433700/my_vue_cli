<template>
    <div id="toast1">
        <span>{{content}}</span>
    </div>
</template>

<script>
export default {
    name: 'toast1',
    props: ['content']
}
</script>

<style scoped>
    @import "../style/mobileComponents/toast.css";
</style>