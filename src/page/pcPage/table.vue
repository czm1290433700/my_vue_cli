<template>
    <div class="pageArea">
        <fieldset>
            <legend>数据表格</legend>
            <myTable v-bind:myTable="myTable"></myTable>
        </fieldset>
    </div>
</template>

<script>
import myTable from '@/components/table'
export default {
    name: 'tablePage',
    components: {
        myTable
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