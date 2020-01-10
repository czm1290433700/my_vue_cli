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
    </div>
</template>

<script>
export default {
    name: 'slideshow',
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
            amounts: 6, 
            timer: new Function(), 
            movePic: 0
        }
    },
    mounted: function(){
        //初始化轮播图列表，实现无缝轮播
        var arr1 = this.imageList.slice(this.imageList.length - this.amounts),
            arr2 = this.imageList.slice(0, this.amounts);
        this.imageList = arr1.concat(this.imageList).concat(arr2);
        //自动轮播
        this.autoplay();
    },
    methods: {
        /**
         * 自动轮播
         */
        autoplay: function(){
            let _this = this;
            this.timer = setInterval(function(){
                _this.move("left");
            }, 1500)
        },
        /**
         * 暂停自动轮播
         */
        pauseAutoplay: function(){
            clearInterval(this.timer);
            clearTimeout(this.timer2);
        },
        /**
         * 移动
         */
        move: function(direction){
            if(direction == "left"){
                if(this.movePic >= 13){
                    this.movePic = 0;
                }else{
                    this.movePic++;
                }
            }else{
                if(this.movePic <= 0){
                    this.movePic = 13;
                }else{
                    this.movePic--;
                }
            }
            this.$refs.slidePics.style.left = this.movePic*-208 + "px";
        },
        /**
         * 向左移动
         */
        moveLeft: function(){
            this.pauseAutoplay();
            this.move("left");
            this.autoplay();
        },
        /**
         * 向右移动
         */
        moveRight: function(){
            this.pauseAutoplay();
            this.move("right");
            this.autoplay();
        }
    }
}
</script>

<style scoped>
    @import "../style/slideshow/slideshow.css";
</style>