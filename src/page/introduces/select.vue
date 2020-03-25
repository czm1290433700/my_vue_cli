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
    name: 'select_introduce',
    data () {
        return {
            code: {
                codeTitle: '选择框',
                code: [
                    '<template>',
                    '    <selectBox v-bind:color="color"></selectBox>',
                    '</template>',
                    '<script>',
                    'import selectBox from "@/components/selectBox"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            color: {',
                    '                hookColor: \'#fff\',',
                    '                backgroundColor: \'#5FB878\'',
                    '            }',
                    '        }',
                    '    },',
                    '    components: {',
                    '        selectBox',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['color', '包含hookColor和backgroundColor两个参数', 'object', '-'],
                    ['hookColor', '箭头颜色', 'string', '-'],
                    ['backgroundColor', '选中以后的背景颜色', 'string', '-']
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