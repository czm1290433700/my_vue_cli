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
    name: 'shuttleBox_introduce',
    data () {
        return {
            code: {
                codeTitle: '穿梭框',
                code: [
                    '<template>',
                    '    <shuttleBox v-bind:shuttleBox="shuttleBox"></shuttleBox>',
                    '</template>',
                    '<script>',
                    'import shuttleBox from "@/components/shuttleBox"',
                    'export default {',
                    '    data () {',
                    '        return {',
                    '            shuttleBox: {',
                    '                list1: [\'Blueprint\', \'LESS\', \'SASS\', \'Bootstrap\'],',
                    '                listTitle1: \'css框架\',',
                    '                list2: [\'Node.js\', \'Angular.js\', \'Vue.js\', \'jQuery\', \'React\'],',
                    '                listTitle2: \'js框架\'',
                    '            }',
                    '        }',
                    '    },',
                    '    components: {',
                    '        shuttleBox',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['shuttleBox', '包含list1, listTitle1, list2, listTitle2四个参数, 具体描述于下', 'object', '-'],
                    ['list1', '左穿梭框数据列表', 'array', '-'],
                    ['listTitle1', '左穿梭框标题', 'string', '-'],
                    ['list2', '右穿梭框数据列表', 'array', '-'],
                    ['listTitle2', '右穿梭框标题', 'string', '-'],
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