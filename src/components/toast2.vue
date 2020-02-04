<template>
    <div id="toast2">
        <span>{{content}}</span>
    </div>
</template>

<script>
export default {
    name: 'toast2',
    props: ['content']
}
</script>

<style scoped>
    @import "../style/mobileComponents/toast.css";
</style>