<template>
    <div class="pageArea">
        <fieldset style="height: 523px">
            <legend>城市地区号选择</legend>
            <cityArea></cityArea>
        </fieldset>
    </div>
</template>

<script>
import cityArea from '@/components/cityArea'
export default {
    name: 'CityArea',
    components: {
        cityArea
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>