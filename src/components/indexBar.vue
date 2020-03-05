<template>
    <div id="indexBar" v-show="indexShow">
        <div class="indexTitle">{{title}}</div>
        <div class="closeBtn" @click="close()">X</div>
        <div class="content">
            <ul class="list" :id="item1.id" v-for="(item1, index1) in data" :key="'info1' +index1">
                <li class="title">{{item1.title}}</li>
                <template class="content" v-for="(item2, index2) in item1.array">
                    <li :key="'info2' + index2">{{item2}}</li>
                </template>
            </ul>
        </div>
        <ul class="navigation">
            <li v-for="(item3, index3) in data" :key="index3">
                <a :href="'#' + item3.id">{{item3.id}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'indexBar',
    props: ['data', 'title'],
    data () {
        return {
            indexShow: false
        }
    },
    methods: {
        /**
         * 显示
         */
        show: function(){
            this.indexShow = true;
        },
        /**
         * 关闭
         */
        close: function(){
            this.indexShow = false;
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/indexBar.css";
</style>