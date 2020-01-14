<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <lazy></lazy>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import lazy from '@/components/lazyLoading'
export default {
    name: 'lazyLoading',
    data() {
        return {
            title: 'lazyLoading 图片懒加载'
        }
    },
    components: {
        pageHeader,
        lazy
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>