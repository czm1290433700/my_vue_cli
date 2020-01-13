<template>
    <div id="slide">
        <div class="arrow-left" @click="moveLeft()"></div>
        <div class="slide-body">
            <ul ref="slidePics">
                <li class="image" v-for="item in imageList" :key="item.key" @mouseover="pauseAutoplay()" @mouseleave="autoplay()" ref="img">
                    <img :src="item">
                </li>
            </ul>
        </div>
        <div class="arrow-right" @click="moveRight()"></div>
        <div class="options">
            <ul ref="options">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
import tools from '@/utils/tool.js'
export default {
    name: 'slideShow4',
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
            index: 1, // 当前显示图片序号
            moveWidth: 0, // 移动距离
            timer: new Function() 
        }
    },
    mounted: function(){
        let ele1 = this.imageList[0], ele2 = this.imageList[this.imageList.length - 1];
        this.imageList.push(ele1);
        this.imageList.unshift(ele2);
        this.moveWidth = this.$refs.img[0].offsetWidth;
        tools.addClass(this.$refs.options.childNodes[0], "active");
        this.autoplay();
    },
    methods: {
        /**
         * 自动轮播
         */
        autoplay: function(){
            let _this = this;
            _this.timer = setInterval(function(){
                _this.moveRight();
            }, 1500)
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
            let _this = this;
            _this.index--;
            setTimeout(function(){
                tools.removeClass(_this.$refs.options.children[(_this.index + 1) - 1], "active");
            }, 300)
            if(this.index == -1){
                this.index = this.imageList.length - 2;
                setTimeout(function(){
                    _this.$refs.slidePics.style.transform = "translate3d(" + -412 * _this.index + "px, 0, 0)";
                }, 300)
                this.$refs.slidePics.style.transitionDuration = "0s";
            }else{
                this.$refs.slidePics.style.transform = "translate3d(" + -412 * this.index + "px, 0, 0)";
                this.$refs.slidePics.style.transitionDuration = "0.3s";
            }
            setTimeout(function(){
                if(_this.index != 0){
                    tools.addClass(_this.$refs.options.children[_this.index - 1], "active");
                }else{
                    tools.addClass(_this.$refs.options.children[6], "active");
                }
            }, 300)
        },
        /**
         * 向右移动
         */
        moveRight: function(){
            let _this = this;
            _this.index++;
            setTimeout(function(){
                if(_this.index != 1){
                    tools.removeClass(_this.$refs.options.children[(_this.index - 1) - 1], "active");
                }else{
                    tools.removeClass(_this.$refs.options.children[6], "active");
                }
            }, 300)
            if(this.index == this.imageList.length - 1){
                this.index = 1;
                //因为动画作了300毫秒，为了看不出来这里也定时300ms再执行
                setTimeout(function(){
                    _this.$refs.slidePics.style.transform = "translate3d(" + -412 * _this.index + "px, 0, 0)";
                }, 300)
                this.$refs.slidePics.style.transitionDuration = "0s";
            }else{
                this.$refs.slidePics.style.transform = "translate3d(" + -412 * this.index + "px, 0, 0)";
                this.$refs.slidePics.style.transitionDuration = "0.3s";
            }
            setTimeout(function(){
                tools.addClass(_this.$refs.options.children[_this.index - 1], "active");
            }, 300)
        }
    }
}
</script>

<style scoped>
    @import "../style/slideshow/slide4.css";
</style>