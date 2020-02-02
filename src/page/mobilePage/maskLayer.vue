<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>自带关闭的遮罩层</legend>
                <button type="button" class="button" @click="showLayer(1)" @onPropsChange="change">显示遮罩层</button>
                <maskLayer v-bind:layerShow="layerShow1" v-bind:closable="true"></maskLayer>
            </fieldset>
            <fieldset>
                <legend>未自带关闭的遮罩层</legend>
                <button type="button" class="button" @click="showLayer(2)" @onPropsChange="change">显示遮罩层</button>
                <maskLayer v-bind:layerShow="layerShow2" v-bind:closable="false"></maskLayer>
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
            layerShow1: false,
            layerShow2: false
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
        showLayer: function(index){
            if(index == 1){
                this.layerShow1 = true;
            }else{
                this.layerShow2 = true;
            }
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