<template>
    <div id="grade">
        <ul ref="stars">
            <li class="star" @mouseover="overStar(0)" @mouseleave="leaveStar(0)" @click="clickStar(0)">
                <div class="white-star"></div>
            </li>
            <li class="star" @mouseover="overStar(1)" @mouseleave="leaveStar(1)" @click="clickStar(1)">
                <div class="white-star"></div>
            </li>
            <li class="star" @mouseover="overStar(2)" @mouseleave="leaveStar(2)" @click="clickStar(2)">
                <div class="white-star"></div>
            </li>
            <li class="star" @mouseover="overStar(3)" @mouseleave="leaveStar(3)" @click="clickStar(3)">
                <div class="white-star"></div>
            </li>
            <li class="star" @mouseover="overStar(4)" @mouseleave="leaveStar(4)" @click="clickStar(4)">
                <div class="white-star"></div>
            </li>
        </ul>
        <div class="word" v-if="isWord && currentIndex != -1">{{currentIndex + 1}}星</div>
    </div>
</template>

<script>
export default {
    name: 'grade',
    data () {
        return {
            currentIndex: -1,
            isWord: false
        }
    },
    mounted () {
        if(this.$props.isShowWord){
            // 如果显示文字有值将显示
            this.isWord = this.$props.isShowWord;
        }
        // 修改星星颜色
        document.styleSheets[0].addRule('#grade .star','border-bottom: 7px solid green');
        document.styleSheets[0].addRule('#grade .star::before','border-bottom: 7px solid green');
        document.styleSheets[0].addRule('#grade .star::after','border-bottom: 7px solid green');
    },
    props: ['isShowWord', 'starColor'],
    methods: {
        /**
         * 鼠标移入星星
         */
        overStar: function(index){
            for(let i = 0; i < this.$refs.stars.children.length; i++){
                if(i <= index){
                    this.$refs.stars.children[i].classList.add('hollow-star');
                }
            }
        },
        /**
         * 鼠标移出星星
         */
        leaveStar: function(index){
            for(let i = 0; i < this.$refs.stars.children.length; i++){
                if(i <= index && i > this.currentIndex){
                    this.$refs.stars.children[i].classList.remove('hollow-star');
                }
            }
        },
        clickStar: function(index){
            this.currentIndex = index;
            this.leaveStar(5);
            this.overStar(index);
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/grade.css";
</style>