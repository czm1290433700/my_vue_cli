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
    name: 'codeBox_introduce',
    data () {
        return {
            code1: {
                codeTitle: '默认修饰',
                code: [
                    '<template>',
                    '    <codeBox1 v-bind:codes="codes"></codeBox1>',
                    '</template>',
                    '<script>',
                    'import codeBox1 from "@/components/codeBox1/"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            codes: {',
                    '                codeTitle: \'my_vue_cli\',',
                    '                code: [',
                    '                    \'moveDown: function(){\',',
                    '                    \'   this.currentPage < this.$props.pageAmounts.totalPages ? this.currentPage++ : \'\';\',',
                    '                    \'}\'',
                    '                ]',
                    '            }',
                    '        }',
                    '    }',
                    '    components: {',
                    '        codeBox1',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code2: {
                codeTitle: 'notepad风格',
                code: [
                    '<template>',
                    '    <codeBox2 v-bind:codes="codes"></codeBox2>',
                    '</template>',
                    '<script>',
                    'import codeBox2 from "@/components/codeBox2/"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            codes: {',
                    '                codeTitle: \'my_vue_cli\',',
                    '                code: [',
                    '                    \'moveDown: function(){\',',
                    '                    \'   this.currentPage < this.$props.pageAmounts.totalPages ? this.currentPage++ : \'\';\',',
                    '                    \'}\'',
                    '                ]',
                    '            }',
                    '        }',
                    '    }',
                    '    components: {',
                    '        codeBox2',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['codes', '包含codeTitle和code属性, 具体描述于下', 'object', '-'],
                    ['codeTitle', '代码框标题', 'string', '-'],
                    ['code', '代码框代码数组，每个元素表示一行代码', 'array', '-']
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