<template>
    <div class="pageArea">
        <fieldset>
            <legend>柱状图</legend>
            <histogram v-bind:histogram="histogram"></histogram>
        </fieldset>
        <fieldset>
            <legend>折线图</legend>
            <linechart v-bind:linechart="linechart"></linechart>
        </fieldset>
    </div>
</template>

<script>
import histogram from '@/components/histogram'
import linechart from '@/components/lineChart'
export default {
    name: 'graph',
    data() {
        return {
            /**
             * 柱状图
             */
            histogram: {
                canvasWidth: 400,
                canvasHeight: 250, 
                xData: [0, 1, 2, 3, 4, 5],
                yData: [1, 2, 3, 4, 5], 
                padding: 30, 
                data: [5, 3, 4, 3.5, 4.5]
            },
            /**
             * 折线图
             */
            linechart: {
                canvasWidth: 400,
                canvasHeight: 250, 
                xData: [0, 1, 2, 3, 4, 5],
                yData: [1, 2, 3, 4, 5], 
                padding: 30, 
                data: [5, 3, 4, 3.5, 4.5]
            }
        }
    },
    components: {
        histogram, linechart
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>