<template>
    <div id="pagination">
        <ul>
            <li :class="currentPage == 0 ? 'pageBtn noActiveBtn' : 'pageBtn'" @click="movePage(-1)">上一页</li>
            <li class="page" v-if="currentPage >= 2">...</li>
            <template v-if="currentPage < 2">
                <li :class="currentPage == 0 ? 'page active' : 'page'" @click="movePage(0)">1</li>
                <li :class="currentPage == 1 ? 'page active' : 'page'" @click="movePage(1)">2</li>
                <li :class="currentPage == 2 ? 'page active' : 'page'" @click="movePage(2)">3</li>
            </template>
            <template v-else-if="currentPage >= 2 && currentPage < pages - 2">
                <li class="page" @click="movePage(currentPage - 1)">{{currentPage}}</li>
                <li class="page active" @click="movePage(currentPage)">{{currentPage + 1}}</li>
                <li class="page" @click="movePage(currentPage + 1)">{{currentPage + 2}}</li>
            </template>
            <template v-else>
                <li :class="currentPage == pages - 3 ? 'page active' : 'page'" @click="movePage(pages - 3)">{{pages - 2}}</li>
                <li :class="currentPage == pages - 2 ? 'page active' : 'page'" @click="movePage(pages - 2)">{{pages - 1}}</li>
                <li :class="currentPage == pages - 1 ? 'page active' : 'page'" @click="movePage(pages - 1)">{{pages}}</li>
            </template>
            <li class="page" v-if="currentPage < pages - 2">...</li>
            <li :class="currentPage == pages - 1 ? 'pageBtn noActiveBtn' : 'pageBtn'" @click="movePage(-2)">下一页</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pagination1',
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