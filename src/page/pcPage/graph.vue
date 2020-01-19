<template>
    <div class="pageArea">
        <fieldset>
            <legend>柱状图</legend>
            <histogram v-bind:histogram="histogram"></histogram>
        </fieldset>
    </div>
</template>

<script>
import histogram from '@/components/histogram'
export default {
    name: 'graph',
    data() {
        return {
            histogram: {
                canvasWidth: 600,
                canvasHeight: 500, 
                xData: [0, 1, 2, 3, 4, 5],
                yData: [1, 2, 3, 4, 5], 
                padding: 50, 
                data: [2, 3, 4, 3.5, 4.5]
            }
        }
    },
    components: {
        histogram
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>