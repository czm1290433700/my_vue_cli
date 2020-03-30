<template>
    <div class="pageArea">
        <fieldset>
            <legend>基础用法</legend>
            <grade></grade>
        </fieldset>
        <fieldset>
            <legend>显示文字</legend>
            <grade v-bind:isShowWord="true"></grade>
        </fieldset>
    </div>
</template>

<script>
import grade from '@/components/grade'
export default {
    name: 'gradeComponent',
    components: {
        grade
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>