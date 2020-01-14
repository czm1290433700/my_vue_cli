<template>
    <div class="pageArea">
        <fieldset>
            <legend>无移图按钮的动画自动轮播图</legend>
            <slideShow1></slideShow1>
        </fieldset>
        <fieldset>
            <legend>有移图按钮的多图自动轮播图</legend>
            <slideShow2></slideShow2>
        </fieldset>
        <fieldset>
            <legend>有移图按钮的一图自动轮播图</legend>
            <slideShow3></slideShow3>
        </fieldset>
        <fieldset>
            <legend>有移图按钮的一图自动动画轮播图</legend>
            <slideShow4></slideShow4>
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