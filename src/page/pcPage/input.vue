<template>
    <div class="pageArea">
        <fieldset>
            <legend>无边框输入框</legend>
            <input1></input1>
        </fieldset>
        <fieldset>
            <legend>无边框密码框</legend>
            <input2></input2>
        </fieldset>
        <fieldset style="height: 240px">
            <legend>提供模糊查询的无边框输入框</legend>
            <input3 v-bind:queryArray="queryArray"></input3>
        </fieldset>
    </div>
</template>

<script>
import input1 from '@/components/input1'
import input2 from '@/components/input2'
import input3 from '@/components/input3'
export default {
    name: 'input',
    data() {
        return {
            queryArray: [
                'slideShow 轮播图',
                'CityArea 城市选择',
                'input 文本框'
            ]
        }
    },
    components: {
        input1, input2, input3
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>