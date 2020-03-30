<template>
    <div id="timeline2">
        <ul>
            <li v-for="(item, index) in events" :key="index">{{item}}</li>
            <li>...</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'timeline2',
    props: ['events']
}
</script>

<style scoped>
    @import "../style/pcComponents/timeline.css";
</style>