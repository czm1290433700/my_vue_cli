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
    name: 'timeline_introduce',
    data () {
        return {
            code1: {
                codeTitle: '常规时间线',
                code: [
                    '<template>',
                    '    <timeline1 v-bind:time="time" v-bind:events="events"></timeline1>',
                    '</template>',
                    '<script>',
                    'import timeline1 from "@/components/timeline1/"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            time: [\'2019年11月2日\', \'2019年12月4日\', \'2020年1月22日\', \'2020年2月30日\'],',
                    '            events: [',
                    '                \'创建my_vue_cli项目，并且创建对应的github仓库，最初的目的是为了把实习所学总结为组件保存在这个项目中\',',
                    '                \'实习结束，从上海回到南昌, 疫情已经爆发, 火车站人山人海都带着口罩，回到南昌看到大家还是和以前一样生活，却没想到只是噩梦的开始\',',
                    '                \'疫情全面爆发，南昌实行各区域封锁，所有店面需要测量体温，待在家里继续完善my_vue_cli\',',
                    '                \'大学开学无限推迟，等待学校通知，不知道什么时候才可以去外面呼吸新鲜空气，什么时候才可以去学习看看熟悉的老同学们\'',
                    '            ]',
                    '        }',
                    '    }',
                    '    components: {',
                    '        timeline1',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            code2: {
                codeTitle: '简约时间线：大事件',
                code: [
                    '<template>',
                    '    <timeline2 v-bind:events="events"></timeline2>',
                    '</template>',
                    '<script>',
                    'import timeline2 from "@/components/timline2/"',
                    'export default {',
                    '    data() {',
                    '        return {',
                    '            events: [',
                    '                \'11.2, 创建my_vue_cli项目雏形完成\',',
                    '                \'12.4, 疫情初步走入视野，实习结束，从上海回家过年\',',
                    '                \'1.22, 疫情全面爆发，南昌封城，进一步完善my_vue_cli\',',
                    '                \'2.30, 开学延期，my_vue_cli组件初步完成，添加组件代码示例中\'',
                    '            ]',
                    '        }',
                    '    }',
                    '    components: {',
                    '        timeline2',
                    '    }',
                    '}',
                    '<script>'
                ]
            },
            tableData: {
                tableHead: ['参数', '说明', '类型', '默认值'],
                tableData: [
                    ['time', '时间线的时间数组', 'array', '-'],
                    ['events', '时间线的事件数组', 'array', '-']
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