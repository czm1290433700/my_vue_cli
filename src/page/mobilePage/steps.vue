<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基本用法</legend>
                <steps1 ref="steps1" v-bind:list="list"></steps1>
                <button type="button" class="button" @click="goNextStep()">下一步</button>
            </fieldset>
            <fieldset>
                <legend>竖向步骤条</legend>
                <steps2></steps2>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import steps1 from '@/components/steps1'
import steps2 from '@/components/steps2'
export default {
    name: 'steps',
    data() {
        return {
            title: 'Steps 步骤条',
            list: ['买家下单', '商家接单', '买家提货', '交易完成']
        }
    },
    components: {
        pageHeader, steps1, steps2
    },
    methods: {
        /**
         * 进入下一阶段
         */
        goNextStep: function(){
            this.$refs.steps1.goNextStep();
        }
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>