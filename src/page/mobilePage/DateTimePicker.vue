<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>选择完整时间</legend>
                <time1></time1>
            </fieldset>
            <fieldset>
                <legend>选择日期(年月日)</legend>
                <time2></time2>
            </fieldset>
            <fieldset>
                <legend>选择日期(年月)</legend>
                <time3></time3>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import time1 from '@/components/time1'
import time2 from '@/components/time2'
import time3 from '@/components/time3'
export default {
    name: 'DateTimePicker',
    data() {
        return {
            title: 'DateTimePicker 时间选择'
        }
    },
    components: {
        pageHeader, time1, time2, time3
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>