<template>
    <div id="pagination">
        <ul>
            <li :class="currentPage == 0 ? 'pageBtn noActiveBtn' : 'pageBtn'" @click="movePage(-1)">上一页</li>
            <li class="pages">{{currentPage + 1}}/{{pages}}</li>
            <li :class="currentPage == pages - 1 ? 'pageBtn noActiveBtn' : 'pageBtn'" @click="movePage(-2)">下一页</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pagination2',
    props: ['pages'],
    data () {
        return {
            currentPage: 0
        }
    },
    methods: {
        /**
         * 修改页数
         */
        movePage: function(index){
            if(index == -1 && this.currentPage != 0){
                this.currentPage--;
            }else if(index == -2 && this.currentPage != this.$props.pages - 1){
                this.currentPage++;
            }else if(index >= 0){
                this.currentPage = index;
            }
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/Pagination.css";
</style>