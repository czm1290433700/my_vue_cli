<template>
    <div id="slide">
        <div class="arrow-left" @click="clickLeftBtn()"></div>
        <div class="slide-body">
            <ul ref="slidePics">
                <li class="image" v-for="item in imageList" :key="item.key" @mouseover="pauseAutoplay()" @mouseleave="autoplay()" ref="img">
                    <img :src="item">
                </li>
            </ul>
        </div>
        <div class="arrow-right" @click="clickRightBtn()"></div>
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
    props: ['imageList'],
    data() {
        return {
            imageList: this.$props.imageList,
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
                for(let i = 0; i < _this.$refs.options.children.length; i++){
                    if(tools.hasClass(_this.$refs.options.children[i], "active")){
                        tools.removeClass(_this.$refs.options.children[i], "active");
                    }
                }
                if(_this.index != 0){
                    tools.addClass(_this.$refs.options.children[_this.index - 1], "active");
                }else{
                    tools.addClass(_this.$refs.options.children[6], "active");
                }
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
        },
        /**
         * 向右移动
         */
        moveRight: function(){
            let _this = this;
            _this.index++;
            setTimeout(function(){
                for(let i = 0; i < _this.$refs.options.children.length; i++){
                    if(tools.hasClass(_this.$refs.options.children[i], "active")){
                        tools.removeClass(_this.$refs.options.children[i], "active");
                    }
                }
                tools.addClass(_this.$refs.options.children[_this.index - 1], "active");
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
        },
        /**
         * 左移按钮事件
         */
        clickLeftBtn: function(){
            this.pauseAutoplay();
            this.moveLeft();
            this.autoplay();
        },
        /**
         * 右移按钮事件
         */
        clickRightBtn: function(){
            this.pauseAutoplay();
            this.moveRight();
            this.autoplay();
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/slide4.css";
</style>