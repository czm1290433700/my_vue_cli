<template>
    <div class="pageArea">
        <fieldset>
            <legend>单箭头</legend>
            <div class="componentsArea">
                <leftArrow style="margin-right: 50px" v-bind:color="color"></leftArrow>
                <rightArrow v-bind:color="color"></rightArrow>
            </div>
        </fieldset>
        <fieldset>
            <legend>双箭头</legend>
            <div class="componentsArea">
                <leftDoubleArrow style="margin-right: 50px" v-bind:color="color"></leftDoubleArrow>
                <rightDoubleArrow v-bind:color="color"></rightDoubleArrow>
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
    data() {
        return {
            color: {
                arrowColor: '#A4ADBF',
                backgroundColor: '#fff'
            }
        }
    },
    components: {
        leftArrow, rightArrow, leftDoubleArrow, rightDoubleArrow
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>