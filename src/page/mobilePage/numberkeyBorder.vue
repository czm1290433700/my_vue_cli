<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <button type="button" class="button">弹出键盘</button>
            <numberkeyBorder></numberkeyBorder>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import numberkeyBorder from '@/components/numberkeyBorder'
export default {
    name: 'numberkeyBorderPage',
    data() {
        return {
            title: 'numberKeyBorder 数字键盘'
        }
    },
    components: {
        pageHeader, numberkeyBorder
    }
}
</script>

<style scoped> 
    @import "../../style/mobilePage/global.css";
</style>