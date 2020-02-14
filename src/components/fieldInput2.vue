<template>
    <div id="fieldInput2">
        <div class="title">{{title}}</div>
        <template v-if="isReadonly">
            <input type="text" :placeholder="defaultHint" readonly="readonly">
        </template>
        <template v-else-if="isDisabled && !isReadonly">
            <input type="text" :placeholder="defaultHint" class="disabled" disabled="disabled">
        </template>
        <template v-else>
            <input type="text" :placeholder="defaultHint">
        </template>
    </div>
</template>

<script>
export default {
    name: 'fieldInput2',
    props: ['title', 'defaultHint', 'isReadonly', 'isDisabled']
}
</script>

<style scoped>
    @import "../style/mobileComponents/fieldInput.css";
</style>