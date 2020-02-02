<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <button type="button" class="button" @click="showLayer()" @onPropsChange="change">显示遮罩层</button>
            <maskLayer v-bind:layerShow="layerShow"></maskLayer>
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
        }
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>