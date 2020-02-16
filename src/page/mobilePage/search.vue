<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基本用法</legend>
                <search1></search1>
            </fieldset>
            <fieldset>
                <legend>自定义按钮</legend>
                <search2></search2>
            </fieldset>
            <fieldset>
                <legend>自定义背景色</legend>
                <search3></search3>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import search1 from '@/components/search1'
import search2 from '@/components/search2'
import search3 from '@/components/search3'
export default {
    name: 'search',
    data() {
        return {
            title: 'Search 搜索框'
        }
    },
    components: {
        pageHeader, search1, search2, search3
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>