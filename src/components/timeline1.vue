<template>
    <div id="timeline1">
        <ul>
            <li v-for="(item, index) in time" :key="index">
                <div class="time">{{time[index]}}</div>
                <div class="events">{{events[index]}}</div>
            </li>
            <li>
                <div class="time">...</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'timeline1',
    props: ['time', 'events']
}
</script>

<style scoped>
    @import "../style/pcComponents/timeline.css";
</style>