<template>
    <div class="pageArea">
        <fieldset>
            <legend>代码示例</legend>
            <codeBox2 v-bind:codes="code1"></codeBox2>
            <codeBox2 v-bind:codes="code2"></codeBox2>
            <codeBox2 v-bind:codes="code3"></codeBox2>
            <codeBox2 v-bind:codes="code4"></codeBox2>
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
    name: 'slideShow_introduce',
    data () {
        return {
            code1: {
                codeTitle: '无移图按钮的动画自动轮播图',
                code: [
                    '<template>',
                    '    <slideShow1 v-bind:imageList="imageList"></slideShow1>',
                    '</template>',
                    '<script>',
                    'import slideShow1 from "@/components/slideShow1/"',
                    'export default {',
                    '    data () {',
                    '        return {',
                    '            imageList: [',
                    '                require("@/assets/images/pic1.jpg"),',
                    '                require("@/assets/images/pic2.jpg"),',
                    '                require("@/assets/images/pic3.jpg"),',
                    '                require("@/assets/images/pic4.jpg"),',
                    '                require("@/assets/images/pic5.jpg"),',
                    '                require("@/assets/images/pic6.jpg"),',
                    '                require("@/assets/images/pic7.jpg")',
                    '            ]',      
                    '        }',
                    '    }',
                    '    components: {',
                    '        slideShow1',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code2: {
                codeTitle: '有移图按钮的多图自动轮播图',
                code: [
                    '<template>',
                    '    <slideShow2 v-bind:imageList="imageList"></slideShow2>',
                    '</template>',
                    '<script>',
                    'import slideShow2 from "@/components/slideShow2/"',
                    'export default {',
                    '    data () {',
                    '        return {',
                    '            imageList: [',
                    '                require("@/assets/images/pic1.jpg"),',
                    '                require("@/assets/images/pic2.jpg"),',
                    '                require("@/assets/images/pic3.jpg"),',
                    '                require("@/assets/images/pic4.jpg"),',
                    '                require("@/assets/images/pic5.jpg"),',
                    '                require("@/assets/images/pic6.jpg"),',
                    '                require("@/assets/images/pic7.jpg")',
                    '            ]',      
                    '        }',
                    '    }',
                    '    components: {',
                    '        slideShow2',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code3: {
                codeTitle: '有移图按钮的一图自动轮播图',
                code: [
                    '<template>',
                    '    <slideShow3 v-bind:imageList="imageList"></slideShow3>',
                    '</template>',
                    '<script>',
                    'import slideShow3 from "@/components/slideShow3/"',
                    'export default {',
                    '    data () {',
                    '        return {',
                    '            imageList: [',
                    '                require("@/assets/images/pic1.jpg"),',
                    '                require("@/assets/images/pic2.jpg"),',
                    '                require("@/assets/images/pic3.jpg"),',
                    '                require("@/assets/images/pic4.jpg"),',
                    '                require("@/assets/images/pic5.jpg"),',
                    '                require("@/assets/images/pic6.jpg"),',
                    '                require("@/assets/images/pic7.jpg")',
                    '            ]',      
                    '        }',
                    '    }',
                    '    components: {',
                    '        slideShow3',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code4: {
                codeTitle: '有移图按钮的一图自动动画轮播图',
                code: [
                    '<template>',
                    '    <slideShow4 v-bind:imageList="imageList"></slideShow4>',
                    '</template>',
                    '<script>',
                    'import slideShow4 from "@/components/slideShow4/"',
                    'export default {',
                    '    data () {',
                    '        return {',
                    '            imageList: [',
                    '                require("@/assets/images/pic1.jpg"),',
                    '                require("@/assets/images/pic2.jpg"),',
                    '                require("@/assets/images/pic3.jpg"),',
                    '                require("@/assets/images/pic4.jpg"),',
                    '                require("@/assets/images/pic5.jpg"),',
                    '                require("@/assets/images/pic6.jpg"),',
                    '                require("@/assets/images/pic7.jpg")',
                    '            ]',      
                    '        }',
                    '    }',
                    '    components: {',
                    '        slideShow4',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['codes', '包含codeTitle和code两个参数, 具体描述于下', 'object', '-'],
                    ['codeTitle', '代码框的标题', 'string', '-'],
                    ['code', '代码框内的代码，每个数组元素表示一行代码', 'array', '-']
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