<template>
    <div id="page">
        <ul>
            <li :class="currentPage == 1 ? 'unclickable' : ''" @click="moveUp()">上一页</li>
            <template v-if="pageAmounts.showPages < pageAmounts.totalPages && currentPage >= pageAmounts.showPages - 1">
                <li @click="choosePage(1)">1</li>
                <li class="ellipsis" v-if="currentPage != 4">...</li>
            </template>
            <template v-for="item in pageAmounts.showPages">
                <template v-if="pageAmounts.showPages < pageAmounts.totalPages && currentPage - 2 >= 1 && currentPage + 2 <= pageAmounts.totalPages">
                    <li :class="currentPage + item - 3 == currentPage ? 'active' : ''" ref="pages" @click="choosePage(currentPage + item - 3)" v-if="currentPage + item - 3 <= pageAmounts.totalPages" :key="item.id">{{currentPage + item - 3}}</li>
                </template>
                <template v-else-if="pageAmounts.showPages < pageAmounts.totalPages && currentPage + 2 > pageAmounts.totalPages">
                    <li :class="pageAmounts.totalPages + item - 5 == currentPage ? 'active' : ''" ref="pages" @click="choosePage(pageAmounts.totalPages + item - 5)" :key="item.id">{{pageAmounts.totalPages + item - 5}}</li>
                </template>
                <template v-else>
                    <li :class="item == currentPage ? 'active' : ''" ref="pages" @click="choosePage(item)" :key="item.id">{{item}}</li>
                </template>
            </template>
            <template v-if="pageAmounts.showPages < pageAmounts.totalPages && pageAmounts.totalPages - currentPage >= 3">
                <li class="ellipsis" v-if="currentPage != pageAmounts.totalPages - 3">...</li>
                <li @click="choosePage(pageAmounts.totalPages)">{{pageAmounts.totalPages}}</li>
            </template>
            <li :class="currentPage == pageAmounts.totalPages ? 'unclickable' : ''" @click="moveDown()">下一页</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'page',
    props: ['pageAmounts'],
    data() {
        return {
            currentPage: 1
        }
    },
    methods: {
        /**
         * 选择页码
         */
        choosePage: function(index){
            this.currentPage = index;
        },
        /**
         * 移到上一页
         */
        moveUp: function(){
            this.currentPage > 1 ? this.currentPage-- : '';
        },
        /**
         * 移到下一页
         */
        moveDown: function(){
            this.currentPage < this.$props.pageAmounts.totalPages ? this.currentPage++ : '';
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/page.css";
</style>