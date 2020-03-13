<template>
    <div id="treeSelect">
        <ul class="titleList">
            <li v-for="(item1, index1) in data" :key="'data1' + index1" :class="index1 == selectedTitleId ? 'active' : ''" ref="titleList" @touchstart="titleStart($event)" @touchend="titleEnd($event)" @click="selectTitle(index1, $event)">{{item1.title}}</li>
        </ul>
        <ul class="arrayList">
            <li v-for="(item2, index2) in data[selectedTitleId].array" :key="'data2' + index2" :class="selectedTitleId == selectedArrayId1 && selectedArrayId2 == index2 ? 'active' : ''" ref="arrayList" @click="selectArray(index2)">{{item2.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'treeSelect2',
    props: ['data'],
    data() {
        return {
            selectedTitleId: 0,  //当前选中的标题id
            selectedArrayId1: 0,    //选中数据所在的标题id
            selectedArrayId2: 0 //选中数据所在的数据id
        }
    },
    methods: {
        /**
         * title按下
         */
        titleStart: function(item){
            item.currentTarget.style.backgroundColor = '#EAEAEA';
        },
        /**
         * title松开
         */
        titleEnd: function(item){
            item.currentTarget.style.backgroundColor = '#fff';
        },
        /**
         * 选择title
         */
        selectTitle: function(index, item){
            this.$refs.titleList[this.selectedTitleId].classList.remove('active');
            this.selectedTitleId = index;
            item.currentTarget.classList.add('active');
        },
        /**
         * 选择array
         */
        selectArray: function(index){
            if(this.selectedArrayId1 == this.selectedTitleId){
                this.$refs.arrayList[this.selectedArrayId2].classList.remove('active');
            }
            this.$refs.arrayList[index].classList.add('active');
            this.selectedArrayId1 = this.selectedTitleId;
            this.selectedArrayId2 = index;
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/treeSelect.css";
</style>