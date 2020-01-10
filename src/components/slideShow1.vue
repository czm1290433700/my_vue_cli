<template>
    <div id="slide">
        <div class="slide-body">
            <ul ref="slidePics">
                <li class="image" v-for="item in imageList" :key="item.key" @mouseover="pauseAutoplay()" @mouseleave="autoplay()">
                    <img :src="item">
                </li>
            </ul>
        </div>
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
            timer2: new Function(),
            moveDistance: 0
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
            // 定时1秒后再轮播,为的是让鼠标移出重新轮播不要显得太仓促
            _this.timer2 = setTimeout(function(){
                _this.timer = setInterval(function(){
                    if(_this.moveDistance > -2704){
                        _this.moveDistance--;
                    }else{
                        _this.moveDistance = 0;
                    }
                    _this.$refs.slidePics.style.left = _this.moveDistance + "px";
                }, 10)}, 1000);
        },
        /**
         * 暂停自动轮播
         */
        pauseAutoplay: function(){
            clearInterval(this.timer);
            clearTimeout(this.timer2);
        }
    }
}
</script>

<style scoped>
    @import "../style/slideshow/slideshow.css";
</style>