<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基本用法</legend>
                <NoticeBar1 v-bind:notice="notice"></NoticeBar1>
            </fieldset>
            <fieldset>
                <legend>禁用滚动</legend>
                <NoticeBar2 v-bind:notice="notice"></NoticeBar2>
            </fieldset>
            <fieldset>
                <legend>多行展示</legend>
                <NoticeBar3 v-bind:notice="notice"></NoticeBar3>
            </fieldset>
            <fieldset>
                <legend>通知栏模式</legend>
                <NoticeBar4 v-bind:notice="notice"></NoticeBar4>
            </fieldset>
            <fieldset>
                <legend>自定义样式</legend>
                <NoticeBar5 v-bind:noticeData="noticeData"></NoticeBar5>
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
import noticeImg from '@/assets/images/noticeImg.png'
export default {
    name: 'NoticeBar',
    data() {
        return {
            title: 'NoticeBar 通知栏',
            notice: 'MY VueCli是一个pc端兼移动端的前端组件库，基于vue-cli2实现，提供了大量常用组件插件，可以帮助开发者快速搭建pc端和移动端页面样式',
            noticeData: {
                backgroundColor: '#ECF9FF',
                color: '#1989FA',
                noticeImg: noticeImg,
                notice: 'MY VueCli是一个pc端兼移动端的前端组件库，基于vue-cli2实现，提供了大量常用组件插件，可以帮助开发者快速搭建pc端和移动端页面样式'
            }
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