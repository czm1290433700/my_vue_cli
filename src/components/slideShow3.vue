<template>
    <div id="slide">
        <div class="arrow-left" @click="moveLeft()"></div>
        <div class="slide-body">
            <ul ref="slidePics">
                <li class="image" v-for="item in imageList" :key="item.key" @mouseover="pauseAutoplay()" @mouseleave="autoplay()">
                    <img :src="item">
                </li>
            </ul>
        </div>
        <div class="arrow-right" @click="moveRight()"></div>
        <div class="options">
            <ul ref="options">
                <li v-for="item in imageList" :key="item.key"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import tools from '@/utils/tool.js'
export default {
    name: 'slideShow3',
    data() {
        return {
            imageList: [
                require("@/assets/images/pic1.jpg"),
                require("@/assets/images/pic2.jpg"),
                require("@/assets/images/pic3.jpg"),
                require("@/assets/images/pic4.jpg"),
                require("@/assets/images/pic5.jpg"),
                require("@/assets/images/pic6.jpg"),
                require("@/assets/images/pic7.jpg")
            ],
            movePic: 0,
            timer: new Function()
        }
    },
    mounted: function(){
        tools.addClass(this.$refs.options.childNodes[0], "active");
        this.autoplay();
    },
    methods: {
        /**
         * 自动轮播
         */
        autoplay: function(){
            this.timer = setInterval(() => {
                tools.removeClass(this.$refs.options.childNodes[this.movePic], "active");
                if(this.movePic == 6){
                    this.movePic = 0;
                }else{
                    this.movePic++;
                }
                tools.addClass(this.$refs.options.childNodes[this.movePic], "active");
                this.$refs.slidePics.style.left = this.movePic * -412 + "px";
            }, 2000);
        },
        /**
         * 暂停自动轮播
         */
        pauseAutoplay: function(){
            clearInterval(this.timer);
        },
        /**
         * 向左移动
         */
        moveLeft: function(){
            this.pauseAutoplay();
            tools.removeClass(this.$refs.options.childNodes[this.movePic], "active");
            this.movePic = this.movePic == 0 ? 6 : --this.movePic;
            tools.addClass(this.$refs.options.childNodes[this.movePic], "active");
            this.$refs.slidePics.style.left = this.movePic * -412 + "px";
            this.autoplay();
        },
        /**
         * 向右移动
         */
        moveRight: function(){
            this.pauseAutoplay();
            tools.removeClass(this.$refs.options.childNodes[this.movePic], "active");
            this.movePic = this.movePic == 6 ? 0 : ++this.movePic;
            tools.addClass(this.$refs.options.childNodes[this.movePic], "active");
            this.$refs.slidePics.style.left = this.movePic * -412 + "px";
            this.autoplay();
        }
    }
}
</script>

<style scoped>
    @import "../style/slideshow/slide.css";
</style>