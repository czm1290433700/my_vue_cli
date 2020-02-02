<template>
    <div id="popWindow3">
        <maskLayer v-bind:layerShow="p_show" v-bind:closable="false"></maskLayer>
        <div class="window" v-show="p_show">
            <span class="closeBtn" @click="closeWindow()">X</span>
        </div>
    </div>
</template>

<script>
import maskLayer from '@/components/maskLayer'
import propsync from '@/utils/propsync.js'
export default {
    name: 'popWindow3',
    components: {
        maskLayer
    },
    props: ['show'],
    mixins: [propsync],
    methods: {
        /**
         * 关闭弹窗
         */
        closeWindow: function(){
            this.p_show = false;
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/popWindow.css";
</style>