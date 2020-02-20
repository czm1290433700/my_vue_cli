<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基本用法</legend>
                <CountDown1></CountDown1>
            </fieldset>
            <fieldset>
                <legend>毫秒级渲染</legend>
                <CountDown1></CountDown1>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import CountDown1 from '@/components/CountDown1'
import CountDown2 from '@/components/CountDown2'
export default {
    name: 'DateTimePicker',
    data() {
        return {
            title: 'CountDown 倒计时'
        }
    },
    components: {
        pageHeader, CountDown1, CountDown2
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>