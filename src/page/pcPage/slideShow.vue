<template>
    <div>
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
    </div>
</template>

<script>
import slideShow1 from '@/components/slideShow1'
import slideShow2 from '@/components/slideShow2'
import slideShow3 from '@/components/slideShow3'
export default {
    name: 'slideShow',
    components: {
        slideShow1,
        slideShow2,
        slideShow3
    }
}
</script>

<style scoped>
    @import "../../style/global/global.css";
</style>