<template>
    <div class="pageArea">
        <fieldset>
            <legend>代码示例</legend>
            <codeBox2 v-bind:codes="code1"></codeBox2>
            <codeBox2 v-bind:codes="code2"></codeBox2>
            <codeBox2 v-bind:codes="code3"></codeBox2>
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
                codeTitle: '无边框输入框',
                code: [
                    '<template>',
                    '    <input1></input1>',
                    '</template>',
                    '<script>',
                    'import input1 from "@/components/input1/"',
                    'export default {',
                    '    components: {',
                    '        input1',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code2: {
                codeTitle: '无边框密码框',
                code: [
                    '<template>',
                    '    <input2></input2>',
                    '</template>',
                    '<script>',
                    'import input2 from "@/components/input2/"',
                    'export default {',
                    '    components: {',
                    '        input2',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code3: {
                codeTitle: '提供模糊查询的无边框输入框',
                code: [
                    '<template>',
                    '    <input3 v-bind:queryArray="queryArray"></input3>',
                    '</template>',
                    '<script>',
                    'import input3 from "@/components/input3/"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            queryArray: [',
                    '                \'slideShow 轮播图\',',
                    '                \'CityArea 城市选择\',',
                    '                \'input 文本框\'',
                    '            ]',
                    '        }',
                    '    },',
                    '    components: {',
                    '        input3',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['queryArray', '模糊查询文本框的查询数组', 'array', '-']
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