<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基础用法</legend>
                <button type="button" class="button" @click="showLayer()" @onPropsChange="change">显示遮罩层</button>
                <maskLayer v-bind:layerShow="layerShow"></maskLayer>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import maskLayer from '@/components/maskLayer'
export default {
    name: 'maskLayerPage',
    data() {
        return {
            title: 'maskLayer 遮罩层',
            layerShow: false
        }
    },
    components: {
        pageHeader,
        maskLayer
    },
    methods: {
        /**
         * 显示遮罩层
         */
        showLayer: function(){
            this.layerShow = true;
        },
        /**
         * 绑定监听事件
         */
        change:function(propName,newVal,oldVal){
            this[propName]=newVal;
            console.log("组件tab的" +propName+ "属性变更为" +newVal);
        }
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>