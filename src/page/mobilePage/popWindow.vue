<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <button type="button" class="button">顶部弹出</button>
            <button type="button" class="button">底部弹出</button>
            <button type="button" class="button">左部弹出</button>
            <button type="button" class="button">右部弹出</button>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
export default {
    name: 'popWindowPage',
    data() {
        return {
            title: 'popWindow 弹窗',
        }
    },
    components: {
        pageHeader
    },
    methods: {
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