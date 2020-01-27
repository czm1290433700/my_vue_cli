<template>
    <div id="shuttleBox">
        <div class="list">
            <ul>
                <li class="title">
                    <div class="initBox" ref="initBox" v-show="!isSelect1" @click="toggleMode(1, -1)"></div>
                    <div class="selectedBox" ref="selectedBox" v-show="isSelect1" @click="toggleMode(1, -1)">
                        <div class="hook" ref="hook"></div>
                    </div>
                    {{shuttleBox.listTitle1}}
                </li>
                <li v-for="(item,index) in shuttleBox.list1" :key="index">
                    <div class="initBox" ref="initBox" v-show="!isSelectedList1[index]" @click="toggleMode(1, index)"></div>
                    <div class="selectedBox" ref="selectedBox" v-show="isSelectedList1[index]" @click="toggleMode(1, index)">
                        <div class="hook" ref="hook"></div>
                    </div>
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="move">
            <div class="move-right">
                <rightDoubleArrow v-bind:color="arrowColor"></rightDoubleArrow>
            </div>
            <div class="move-left">
                <leftDoubleArrow v-bind:color="arrowColor"></leftDoubleArrow>
            </div>
        </div>
        <div class="list">
            <ul>
                <li class="title">
                    <div class="initBox" ref="initBox" v-show="!isSelect2" @click="toggleMode(2, -1)"></div>
                    <div class="selectedBox" ref="selectedBox" v-show="isSelect2" @click="toggleMode(2, -1)">
                        <div class="hook" ref="hook"></div>
                    </div>
                    {{shuttleBox.listTitle2}}
                </li>
                <li v-for="(item,index) in shuttleBox.list2" :key="index">
                    <div class="initBox" ref="initBox" v-show="!isSelectedList2[index]" @click="toggleMode(2, index)"></div>
                    <div class="selectedBox" ref="selectedBox" v-show="isSelectedList2[index]" @click="toggleMode(2, index)">
                        <div class="hook" ref="hook"></div>
                    </div>
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import rightDoubleArrow from '@/components/rightDoubleArrow'
import leftDoubleArrow from '@/components/leftDoubleArrow'
import selectBox from '@/components/selectBox'
export default {
    name: 'shuttleBox',
    props: ['shuttleBox'],
    data() {
        return {
            arrowColor: {
                arrowColor: '#C9CACE',
                backgroundColor: '#fff'
            },
            isSelect1: false,
            isSelect2: false,
            isSelectedList1: [],
            isSelectedList2: [],
            isChanged1: false,
            isChanged2: false
        }
    },
    watch: {
        /** 因为vue中的数组机制动态绑定的机制基于数组地址是否改变，所以这里使用监听事件监听 */
        isChanged1: function(){
            var arr = new Array();
            for(let i = 0; i < this.isSelectedList1.length; i++){
                arr.push(this.isSelectedList1[i]);
            }
            this.isSelectedList1 = arr;
            this.isChanged1 = false;
        },
        isChanged2: function(){
            var arr = new Array();
            for(let i = 0; i < this.isSelectedList2.length; i++){
                arr.push(this.isSelectedList2[i]);
            }
            this.isSelectedList2 = arr;
            this.isChanged2 = false;
        }
    },
    mounted: function(){
        for(let i = 0; i < this.$props.shuttleBox.list1.length; i++){
            this.isSelectedList1.push(false);
        }
        for(let i = 0; i < this.$props.shuttleBox.list2.length; i++){
            this.isSelectedList2.push(false);
        }
    },
    methods: {
        /**
         * 全选事件
         */ 
        selectAll: function(index){
            if(index == 1){
                for(let i = 0; i < this.isSelectedList1.length; i++){
                    this.isSelectedList1[i] = this.isSelect1;
                }
                this.isChanged1 = true;
            }else{
                for(let i = 0; i < this.isSelectedList2.length; i++){
                    this.isSelectedList2[i] = this.isSelect2;
                }
                this.isChanged2 = true;
            }
        },
        /**
         * 切换状态
         */
        toggleMode: function(index1, index2){
            if(index1 == 1){
                if(index2 == -1){
                    this.isSelect1 = !this.isSelect1;
                    this.selectAll(1);
                }else{
                    this.isSelectedList1[index2] = !this.isSelectedList1[index2];
                    if(!this.isSelectedList1[index2] && this.isSelect1){
                        this.isSelect1 = false;
                    }
                    this.isChanged1 = true;
                }
            }else{
                if(index2 == -1){
                    this.isSelect2 = !this.isSelect2;
                    this.selectAll(2);
                }else{
                    this.isSelectedList2[index2] = !this.isSelectedList2[index2];
                    if(!this.isSelectedList2[index2] && this.isSelect2){
                        this.isSelect2 = false;
                    }
                    this.isChanged2 = true;
                }
            }
        }
    },
    components: {
        rightDoubleArrow, leftDoubleArrow, selectBox
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/shuttleBox.css";
</style>