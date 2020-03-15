<template>
    <div id="treeSelect">
        <ul class="titleList">
            <li v-for="(item1, index1) in data" :key="'data1' + index1" :class="!item1.selectable ? 'disabled' : index1 == selectedTitleId ? 'active' : ''" ref="titleList" @touchstart="titleStart($event, item1.selectable)" @touchend="titleEnd($event, item1.selectable)" @click="selectTitle(index1, $event, item1.selectable)">{{item1.title}}</li>
        </ul>
        <ul class="arrayList">
            <li v-for="(item2, index2) in data[selectedTitleId].array" :key="'data2' + index2" :class="!item2.selectable ? 'disabled' : selectedArray.indexOf(selectedTitleId + '+' + index2) != -1 ? 'active' : ''" ref="arrayList" @click="selectArray(index2, $event, item2.selectable)">{{item2.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'treeSelect2',
    props: ['data'],
    data() {
        return {
            selectedTitleId: 0, //当前选中的标题Id
            selectedArray: []   // 存放选中对象的数组
        }
    },
    methods: {
        /**
         * title按下
         */
        titleStart: function(item, selectable){
            if(selectable){
                item.currentTarget.style.backgroundColor = '#EAEAEA';
            }
        },
        /**
         * title松开
         */
        titleEnd: function(item, selectable){
            if(selectable){
                item.currentTarget.style.backgroundColor = '#fff';
            }
        },
        /**
         * 选择title
         */
        selectTitle: function(index, item, selectable){
            if(selectable){
                this.$refs.titleList[this.selectedTitleId].classList.remove('active');
                this.selectedTitleId = index;
                item.currentTarget.classList.add('active');
            }
        },
        /**
         * 选择array
         */
        selectArray: function(index, item, selectable){
            if(selectable){
                var val = this.selectedTitleId + '+' + index;
                if(item.currentTarget.classList.contains('active')){
                    var index = this.selectedArray.indexOf(val);
                    this.selectedArray.splice(index, 1);
                }else{
                    item.currentTarget.classList.add('active');
                    this.selectedArray.push(val);
                }
            }
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/treeSelect.css";
</style>