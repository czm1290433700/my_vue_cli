<template>
    <table id="myTable">
        <tr>
            <th v-for="(item,index) in tableHead" :key="index">
                <div class="tableHead">
                    {{item}}
                    <div class="increaseSort" @click="increaseSort(index, $event)" ref="topArrow"></div>
                    <div class="decreaseSort" @click="decreaseSort(index, $event)" ref="bottomArrow"></div>
                </div>
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
    },
    methods: {
        /** 
         * 增序排序
         */
        increaseSort: function(index, item){
            this.tableData.sort(function(a, b){
                if(tools.isChinese(a[index]) && tools.isChinese(b[index])){
                    return b[index].localeCompare(a[index]);
                }else{
                    return a[index] > b[index];
                }
            });
            this.tableData = this.tableData.concat();
            this.initArrow();
            item.currentTarget.style.borderBottom = '5px solid #000';
        },
        /** 
         * 降序排序
         */
        decreaseSort: function(index, item){
            this.tableData.sort(function(a, b){
                if(tools.isChinese(a[index]) && tools.isChinese(b[index])){
                    return a[index].localeCompare(b[index]);    // 按照汉语拼音顺序
                }else{
                    return a[index] < b[index];
                }
            });
            this.tableData = this.tableData.concat();
            this.initArrow();
            item.currentTarget.style.borderTop = '5px solid #000';
        },
        /**
         * 箭头样式初始化
         */
        initArrow: function(){
            for(let i = 0; i < this.$refs.topArrow.length; i++){
                this.$refs.topArrow[i].style.borderBottom = '5px solid #B2B2B2';
            }
            for(let i = 0; i < this.$refs.bottomArrow.length; i++){
                this.$refs.bottomArrow[i].style.borderTop = '5px solid #B2B2B2';
            }
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/myTable.css";
</style>