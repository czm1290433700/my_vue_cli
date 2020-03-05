<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基础用法</legend>
                <button class="button" @click="showIndexBar()">弹出索引栏</button>
                <indexBar ref="indexBar" v-bind:data="data" v-bind:title="title"></indexBar>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import indexBar from '@/components/indexBar'
export default {
    name: 'IndexBarPage',
    data() {
        return {
            title: 'IndexBar 索引栏',
            data: [
                {
                    title: '标题1',
                    array: ['内容1', '内容2', '内容3'],
                    id: 1
                },
                {
                    title: '标题2',
                    array: ['内容1', '内容2', '内容3'],
                    id: 2
                },
                {
                    title: '标题3',
                    array: ['内容1', '内容2', '内容3'],
                    id: 3
                },
                {
                    title: '标题4',
                    array: ['内容1', '内容2', '内容3'],
                    id: 4
                },
                {
                    title: '标题5',
                    array: ['内容1', '内容2', '内容3'],
                    id: 5
                }
            ],
            title: '索引栏标题'
        }
    },
    components: {
        pageHeader, indexBar
    },
    methods: {
        /**
         * 显示索引栏
         */
        showIndexBar: function(){
            this.$refs.indexBar.show();
        }
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>