<template>
    <div class="pageArea">
        <fieldset>
            <legend>选择框</legend>
            <selectBox></selectBox>
        </fieldset>
    </div>
</template>

<script>
import selectBox from '@/components/selectBox'
export default {
    name: 'selectPage',
    components: {
        selectBox
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>