<template>
    <table id="myTable">
        <tr>
            <th v-for="(item,index) in tableHead" :key="index">
                <div class="tableHead">{{item}}</div>
            </th>
        </tr>
        <tr v-for="item in tableData" :key="item.id">
            <td v-for="dataItem in item" :key="dataItem.id">{{dataItem}}</td>
        </tr>
    </table>
</template>

<script>
import tools from '@/utils/tool.js'
export default {
    name: 'myTable',
    props: ['myTable'],
    data() {
        return {
            tableHead: this.$props.myTable.tableHead,
            tableData: this.$props.myTable.tableData
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/myTable.css";
</style>