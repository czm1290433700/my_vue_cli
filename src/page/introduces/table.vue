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
    name: 'input_introduce',
    data () {
        return {
            code1: {
                codeTitle: '基本用法',
                code: [
                    '<template>',
                    '    <table1 v-bind:myTable="myTable"></table1>',
                    '</template>',
                    '<script>',
                    'import table1 from "@/components/table1/"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            myTable: {',
                    '                tableHead: [\'姓名\', \'年龄\', \'语文成绩\', \'数学成绩\', \'英文成绩\'],',
                    '                tableData: [',
                    '                    [\'小李\', 15, 80, 90, 100],',
                    '                    [\'小红\', 14, 90, 80, 100],',
                    '                    [\'小明\', 16, 100, 100, 80],',
                    '                    [\'小芳\', 14, 70, 100, 100]',
                    '                ]',
                    '            }',
                    '        }',
                    '    }',
                    '    components: {',
                    '        table1',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code2: {
                codeTitle: '数据表格',
                code: [
                    '<template>',
                    '    <table2 v-bind:myTable="myTable"></table2>',
                    '</template>',
                    '<script>',
                    'import table2 from "@/components/table2/"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            myTable: {',
                    '                tableHead: [\'姓名\', \'年龄\', \'语文成绩\', \'数学成绩\', \'英文成绩\'],',
                    '                tableData: [',
                    '                    [\'小李\', 15, 80, 90, 100],',
                    '                    [\'小红\', 14, 90, 80, 100],',
                    '                    [\'小明\', 16, 100, 100, 80],',
                    '                    [\'小芳\', 14, 70, 100, 100]',
                    '                ]',
                    '            }',
                    '        }',
                    '    }',
                    '    components: {',
                    '        table2',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['myTable', '包含tableHead和tableData属性, 具体描述于下', 'object', '-'],
                    ['tableHead', '表头数组', 'array', '-'],
                    ['tableData', '表格数组', 'array', '-']
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