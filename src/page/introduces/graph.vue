<template>
    <div class="pageArea">
        <fieldset>
            <legend>代码示例</legend>
            <codeBox2 v-bind:codes="code1"></codeBox2>
            <codeBox2 v-bind:codes="code2"></codeBox2>
        </fieldset>
        <fieldset>
            <legend>API</legend>
            <table1 v-bind:myTable="tableData"></table1>
        </fieldset>
    </div>
</template>

<script>
import codeBox2 from '@/components/codeBox2'
import table1 from '@/components/table1'
export default {
    name: 'graph_introduce',
    data () {
        return {
            code1: {
                codeTitle: '柱状图',
                code: [
                    '<template>',
                    '    <histogram v-bind:histogram="histogram"></histogram>',
                    '</template>',
                    '<script>',
                    'import histogram from "@/components/histogram/"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            histogram: {',
                    '                canvasWidth: 400,',
                    '                canvasHeight: 250,', 
                    '                xData: [0, 1, 2, 3, 4, 5],',
                    '                yData: [1, 2, 3, 4, 5],', 
                    '                padding: 30,', 
                    '                data: [5, 3, 4, 3.5, 4.5]',
                    '            },',
                    '        }',
                    '    }',
                    '    components: {',
                    '        histogram',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code2: {
                codeTitle: '折线图',
                code: [
                    '<template>',
                    '    <linechart v-bind:linechart="linechart"></linechart>',
                    '</template>',
                    '<script>',
                    'import linechart from "@/components/linechart/"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            linechart: {',
                    '                canvasWidth: 400,',
                    '                canvasHeight: 250,', 
                    '                xData: [0, 1, 2, 3, 4, 5],',
                    '                yData: [1, 2, 3, 4, 5],', 
                    '                padding: 30,', 
                    '                data: [5, 3, 4, 3.5, 4.5]',
                    '            }',
                    '        }',
                    '    }',
                    '    components: {',
                    '        linechart',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['canvasWidth', '画布宽', 'number', '-'],
                    ['canvasHeight', '画布高', 'number', '-'],
                    ['xData', '图表x轴坐标值(包含原点)', 'array', '-'],
                    ['yData', '图表y轴坐标值', 'array', '-'],
                    ['padding', '图表距画布边距的距离', 'number', ''],
                    ['data', '图表数据数组', 'array', '-']
                ]
            }
        }
    },
    components: {
        codeBox2, table1
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>