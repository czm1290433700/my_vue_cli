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
    name: 'grade_introduce',
    data () {
        return {
            code1: {
                codeTitle: '基础用法',
                code: [
                    '<template>',
                    '    <grade></grade>',
                    '</template>',
                    '<script>',
                    'import grade from "@/components/grade/"',
                    'export default {',
                    '    components: {',
                    '        grade',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code2: {
                codeTitle: '显示文字',
                code: [
                    '<template>',
                    '    <grade v-bind:isShowWord="true"></grade>',
                    '</template>',
                    '<script>',
                    'import grade from "@/components/grade/"',
                    'export default {',
                    '    components: {',
                    '        grade',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['isShowWord', '是否显示文字', 'boolean', 'false'],
                    ['starColor', '星星颜色', 'string', '#FFB800']
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