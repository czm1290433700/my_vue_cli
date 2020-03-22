<template>
    <div class="pageArea">
        <fieldset>
            <legend>代码示例</legend>
            <codeBox2 v-bind:codes="code"></codeBox2>
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
    name: 'calendar_introduce',
    data () {
        return {
            code: {
                codeTitle: '日历控件',
                code: [
                    '<template>',
                    '    <calendar></calendar>',
                    '</template>',
                    '<script>',
                    'import calendar from "@/components/calendar"',
                    'export default {',
                    '    components: {',
                    '        calendar',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['-', '-', '-', '-']
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