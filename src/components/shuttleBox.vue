<template>
    <div id="shuttleBox">
        <div class="list">
            <ul>
                <li class="title">{{shuttleBox.listTitle1}}</li>
                <li v-for="item in shuttleBox.list1" :key="item.id">{{item}}</li>
            </ul>
        </div>
        <div class="move">
            <div class="move-right">
                <rightDoubleArrow v-bind:color="color"></rightDoubleArrow>
            </div>
            <div class="move-left">
                <leftDoubleArrow v-bind:color="color"></leftDoubleArrow>
            </div>
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
import rightDoubleArrow from '@/components/rightDoubleArrow'
import leftDoubleArrow from '@/components/leftDoubleArrow'
export default {
    name: 'shuttleBox',
    props: ['shuttleBox'],
    data() {
        return {
            color: {
                arrowColor: '#C9CACE',
                backgroundColor: '#fff'
            }
        }
    },
    components: {
        rightDoubleArrow, leftDoubleArrow
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/shuttleBox.css";
</style>