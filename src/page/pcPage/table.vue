<template>
    <div class="pageArea">
        <fieldset>
            <legend>基本用法</legend>
            <table1 v-bind:myTable="myTable"></table1>
        </fieldset>
        <fieldset>
            <legend>数据表格</legend>
            <table2 v-bind:myTable="myTable"></table2>
        </fieldset>
    </div>
</template>

<script>
import table1 from '@/components/table1'
import table2 from '@/components/table2'
export default {
    name: 'tablePage',
    components: {
        table1, table2
    },
    data() {
        return {
            myTable: {
                tableHead: ['姓名', '年龄', '语文成绩', '数学成绩', '英文成绩'],
                tableData: [
                    ['小李', 15, 80, 90, 100],
                    ['小红', 14, 90, 80, 100],
                    ['小明', 16, 100, 100, 80],
                    ['小芳', 14, 70, 100, 100]
                ]
            }
        }
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>