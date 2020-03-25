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
    name: 'page_introduce',
    data () {
        return {
            code: {
                codeTitle: '分页',
                code: [
                    '<template>',
                    '    <page v-bind:pageAmounts="page"></page>',
                    '</template>',
                    '<script>',
                    'import page from "@/components/page/"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            page: {',
                    '                showPages: 5,',
                    '                totalPages: 5',
                    '            },',
                    '        }',
                    '    }',
                    '    components: {',
                    '        table1',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['page', '包含showPages和totalPages属性, 具体描述于下', 'object', '-'],
                    ['showPages', '显示页数', 'number', '-'],
                    ['totalPages', '总页数', 'number', '-']
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