<template>
    <div id="shuttleBox">
        <div class="list">
            <ul>
                <li class="title">{{shuttleBox.listTitle1}}</li>
                <li v-for="item in shuttleBox.list1" :key="item.id">{{item}}</li>
            </ul>
        </div>
        <div class="move">
            <div class="move-left"><i></i></div>
            <div class="move-right"><i></i></div>
        </div>
        <div class="list">
            <ul>
                <li class="title">{{shuttleBox.listTitle2}}</li>
                <li v-for="item in shuttleBox.list2" :key="item.id">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'shuttleBox',
    props: ['shuttleBox']
}
</script>

<style scoped>
    @import "../style/pcComponents/shuttleBox.css";
</style>