<template>
    <!-- @touchmove.prevent 用于阻止页面滚动 -->
    <div id="maskLayer" v-show="p_layerShow" @click="closable ? setLayerShow() : ''"></div>
</template>

<script>
import propsync from '@/utils/propsync.js'
export default {
    name: 'maskLayer',
    props: ['layerShow', 'closable'],
    mixins: [propsync],//声明使用propsync的mixin
    methods: {
        /** 
         * 点击遮罩层消失
         */
        setLayerShow: function(){
            this.p_layerShow = false;
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/maskLayer.css";
</style>