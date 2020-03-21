<template>
    <div class="pageArea">
        <fieldset>
            <legend>无移图按钮的动画自动轮播图</legend>
            <slideShow1 v-bind:imageList="imageList"></slideShow1>
        </fieldset>
        <fieldset>
            <legend>有移图按钮的多图自动轮播图</legend>
            <slideShow2 v-bind:imageList="imageList"></slideShow2>
        </fieldset>
        <fieldset>
            <legend>有移图按钮的一图自动轮播图</legend>
            <slideShow3 v-bind:imageList="imageList"></slideShow3>
        </fieldset>
        <fieldset>
            <legend>有移图按钮的一图自动动画轮播图</legend>
            <slideShow4 v-bind:imageList="imageList"></slideShow4>
        </fieldset>
    </div>
</template>

<script>
import slideShow1 from '@/components/slideShow1'
import slideShow2 from '@/components/slideShow2'
import slideShow3 from '@/components/slideShow3'
import slideShow4 from '@/components/slideShow4'
export default {
    name: 'slideShow',
    data () {
        return {
            imageList: [
                require("@/assets/images/pic1.jpg"),
                require("@/assets/images/pic2.jpg"),
                require("@/assets/images/pic3.jpg"),
                require("@/assets/images/pic4.jpg"),
                require("@/assets/images/pic5.jpg"),
                require("@/assets/images/pic6.jpg"),
                require("@/assets/images/pic7.jpg")
            ]      
        }
    },
    components: {
        slideShow1,
        slideShow2,
        slideShow3,
        slideShow4
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>