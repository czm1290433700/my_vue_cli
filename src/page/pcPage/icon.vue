<template>
    <div class="pageArea">
        <fieldset>
            <legend>单箭头</legend>
            <div class="componentsArea">
                <leftArrow style="margin-right: 50px"></leftArrow>
                <rightArrow></rightArrow>
            </div>
        </fieldset>
        <fieldset>
            <legend>双箭头</legend>
            <div class="componentsArea">
                <leftDoubleArrow style="margin-right: 50px"></leftDoubleArrow>
                <rightDoubleArrow></rightDoubleArrow>
            </div>
        </fieldset>
    </div>
</template>

<script>
import leftArrow from '@/components/leftArrow'
import rightArrow from '@/components/rightArrow'
import leftDoubleArrow from '@/components/leftDoubleArrow'
import rightDoubleArrow from '@/components/rightDoubleArrow'
export default {
    name: 'icon',
    components: {
        leftArrow, rightArrow, leftDoubleArrow, rightDoubleArrow
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>