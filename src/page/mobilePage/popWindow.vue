<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>顶部弹出</legend>
                <button type="button" class="button" @click="setWindow1()">顶部弹出</button>
                <popWindow1 v-bind:show="showWindow1" @onPropsChange="change()"></popWindow1>
            </fieldset>
            <fieldset>
                <legend>底部弹出</legend>
                <button type="button" class="button" @click="setWindow2()">底部弹出</button>
                <popWindow2 v-bind:show="showWindow2" @onPropsChange="change()"></popWindow2>
            </fieldset>
            <fieldset>
                <legend>左部弹出</legend>
                <button type="button" class="button" @click="setWindow3()">左部弹出</button>
                <popWindow3 v-bind:show="showWindow3" @onPropsChange="change()"></popWindow3>
            </fieldset>
            <fieldset>
                <legend>右部弹出</legend>
                <button type="button" class="button" @click="setWindow4()">右部弹出</button>
                <popWindow4 v-bind:show="showWindow4" @onPropsChange="change()"></popWindow4>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import popWindow1 from '@/components/popWindow1'
import popWindow2 from '@/components/popWindow2'
import popWindow3 from '@/components/popWindow3'
import popWindow4 from '@/components/popWindow4'
export default {
    name: 'popWindowPage',
    data() {
        return {
            title: 'popWindow 弹窗',
            showWindow1: false,
            showWindow2: false,
            showWindow3: false,
            showWindow4: false
        }
    },
    components: {
        pageHeader, popWindow1, popWindow2, popWindow3, popWindow4
    },
    methods: {
        /**
         * 绑定监听事件
         */
        change: function(propName,newVal,oldVal){
            this[propName]=newVal;
        },
        /**
         * 弹出顶部弹窗
         */
        setWindow1: function(){
            this.showWindow1 = true;
        },
        /**
         * 弹出底部弹窗
         */
        setWindow2: function(){
            this.showWindow2 = true;
        },
        /**
         * 弹出左部弹窗
         */
        setWindow3: function(){
            this.showWindow3 = true;
        },
        /**
         * 弹出右部弹窗
         */
        setWindow4: function(){
            this.showWindow4 = true;
        }
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>