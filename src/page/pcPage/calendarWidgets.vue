<template>
    <div class="pageArea">
        <fieldset>
            <legend>日历控件</legend>
            <calendar></calendar>
        </fieldset>
    </div>
</template>

<script>
import calendar from '@/components/calendar'
export default {
    name: 'calendarWidgets',
    components: {
        calendar
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>