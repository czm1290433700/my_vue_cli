<template>
    <div class="pageArea">
        <fieldset>
            <legend>选择框</legend>
            <selectBox v-bind:color="color"></selectBox>
        </fieldset>
    </div>
</template>

<script>
import selectBox from '@/components/selectBox'
export default {
    name: 'selectPage',
    data() {
        return {
            color: {
                hookColor: '#fff',
                backgroundColor: '#5FB878'
            }
        }
    },
    components: {
        selectBox
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>