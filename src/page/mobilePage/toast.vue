<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>文字提示</legend>
                <button type="button" class="button">文字提示</button>
                <button type="button" class="button">长文字提示</button>
            </fieldset>
            <fieldset>
                <legend>加载提示</legend>
                <button type="button" class="button">加载提示1</button>
                <button type="button" class="button">加载提示2</button>
                <button type="button" class="button">加载提示3</button>
            </fieldset>
            <toast1></toast1>
            <toast2></toast2>
            <toast3></toast3>
            <toast4></toast4>
            <toast5></toast5>
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
            title: 'toast 轻提示'
        }
    },
    components: {
        pageHeader, toast1, toast2, toast3, toast4, toast5
    },
    methods: {
        
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>