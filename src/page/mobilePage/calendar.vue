<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <mobileCalendar></mobileCalendar>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import mobileCalendar from '@/components/mobileCalendar'
export default {
    name: 'calendar',
    data() {
        return {
            title: 'calendar 日历'
        }
    },
    components: {
        pageHeader,
        mobileCalendar
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>