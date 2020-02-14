<template>
    <div id="fieldInput1">
        <input type="text" :placeholder="defaultHint">
    </div>
</template>

<script>
export default {
    name: 'fieldInput1',
    props: ['defaultHint']
}
</script>

<style scoped>
    @import "../style/mobileComponents/fieldInput.css";
</style>