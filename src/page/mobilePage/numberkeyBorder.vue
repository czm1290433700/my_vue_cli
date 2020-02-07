<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <div class="mask" @click="hideBorder()"></div>
            <button type="button" class="button" @click="showBorder()">弹出键盘</button>
            <numberkeyBorder ref="keyBorder"></numberkeyBorder>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import numberkeyBorder from '@/components/numberkeyBorder'
export default {
    name: 'numberkeyBorderPage',
    data() {
        return {
            title: 'numberKeyBorder 数字键盘'
        }
    },
    components: {
        pageHeader, numberkeyBorder
    },
    methods: {
        /** 
         * 显示键盘
         */
        showBorder: function(){
            this.$refs.keyBorder.show();
        },
        /**
         * 隐藏键盘
         */
        hideBorder: function(){
            this.$refs.keyBorder.hide();
        }
    }
}
</script>

<style scoped> 
    @import "../../style/mobilePage/global.css";
</style>