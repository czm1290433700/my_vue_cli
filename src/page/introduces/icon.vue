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
    name: 'icon_introduce',
    data () {
        return {
            code1: {
                codeTitle: '单箭头',
                code: [
                    '<template>',
                    '    <leftArrow v-bind:color="color"></leftArrow>',
                    '    <rightArrow v-bind:color="color"></rightArrow>',
                    '</template>',
                    '<script>',
                    'import leftArrow from "@/components/leftArrow"',
                    'import rightArrow from "@/components/rightArrow"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            color: {',
                    '                arrowColor: \'#A4ADBF\',',
                    '                backgroundColor: \'#fff\'',
                    '            }',
                    '        }',
                    '    }',
                    '    components: {',
                    '        leftArrow, rightArrow',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code2: {
                codeTitle: '双箭头',
                code: [
                    '<template>',
                    '    <leftDoubleArrow v-bind:color="color"></leftDoubleArrow>',
                    '    <rightDoubleArrow v-bind:color="color"></rightDoubleArrow>',
                    '</template>',
                    '<script>',
                    'import leftDoubleArrow from "@/components/leftDoubleArrow"',
                    'import rightDoubleArrow from "@/components/rightDoubleArrow"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            color: {',
                    '                arrowColor: \'#A4ADBF\',',
                    '                backgroundColor: \'#fff\'',
                    '            }',
                    '        }',
                    '    }',
                    '    components: {',
                    '        leftDoubleArrow, rightDoubleArrow',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['color', '包含arrowColor和backgroundColor属性, 具体描述于下', 'object', '-'],
                    ['arrowColor', '箭头颜色', 'string', '-'],
                    ['backgroundColor', '背景颜色', 'string', '-']
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