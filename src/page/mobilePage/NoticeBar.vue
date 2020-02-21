<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基本用法</legend>
                <NoticeBar1></NoticeBar1>
            </fieldset>
            <fieldset>
                <legend>禁用滚动</legend>
                <NoticeBar2></NoticeBar2>
            </fieldset>
            <fieldset>
                <legend>多行展示</legend>
                <NoticeBar3></NoticeBar3>
            </fieldset>
            <fieldset>
                <legend>通知栏模式</legend>
                <NoticeBar4></NoticeBar4>
            </fieldset>
            <fieldset>
                <legend>自定义样式</legend>
                <NoticeBar5></NoticeBar5>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import NoticeBar1 from '@/components/NoticeBar1'
import NoticeBar2 from '@/components/NoticeBar2'
import NoticeBar3 from '@/components/NoticeBar3'
import NoticeBar4 from '@/components/NoticeBar4'
import NoticeBar5 from '@/components/NoticeBar5'
export default {
    name: 'NoticeBar',
    data() {
        return {
            title: 'NoticeBar 通知栏'
        }
    },
    components: {
        pageHeader, NoticeBar1, NoticeBar2, NoticeBar3, NoticeBar4, NoticeBar5
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>