<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>文字提示</legend>
                <button type="button" class="button" @click="popToast(1)">文字提示</button>
                <button type="button" class="button" @click="popToast(2)">长文字提示</button>
            </fieldset>
            <fieldset>
                <legend>加载提示</legend>
                <button type="button" class="button" @click="popToast(3)">加载提示1</button>
                <button type="button" class="button" @click="popToast(4)">加载提示2</button>
                <button type="button" class="button" @click="popToast(5)">加载提示3</button>
            </fieldset>
            <toast1 v-bind:content="content1" v-show="toastShow1"></toast1>
            <toast2 v-bind:content="content2" v-show="toastShow2"></toast2>
            <toast3 v-bind:content="content3" v-show="toastShow3"></toast3>
            <toast4 v-bind:content="content4" v-show="toastShow4"></toast4>
            <toast5 v-bind:content="content5" v-show="toastShow5"></toast5>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import toast1 from '@/components/toast1'
import toast2 from '@/components/toast2'
import toast3 from '@/components/toast3'
import toast4 from '@/components/toast4'
import toast5 from '@/components/toast5'
export default {
    name: 'toastPage',
    data() {
        return {
            title: 'toast 轻提示',
            content1: '文字提示',
            toastShow1: false,
            content2: '很长很长很长很长很长很长的文字提示',
            toastShow2: false,
            content3: '加载中...',
            toastShow3: false,
            content4: '加载中...',
            toastShow4: false,
            content5: '加载中...',
            toastShow5: false
        }
    },
    components: {
        pageHeader, toast1, toast2, toast3, toast4, toast5
    },
    methods: {
        /**
         * 弹出弹框
         */
        popToast: function(index){
            let _this = this;
            _this['toastShow' + index] = true;
            setTimeout(function(){
                _this['toastShow' + index] = false;
            }, 2500);
        }
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>