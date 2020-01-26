<template>
    <div class="pageArea">
        <fieldset>
            <legend>穿梭框</legend>
            <shuttleBox v-bind:shuttleBox="shuttleBox"></shuttleBox>
        </fieldset>
    </div>
</template>

<script>
import shuttleBox from '@/components/shuttleBox'
export default {
    name: 'shuttleBoxPage',
    data () {
        return {
            shuttleBox: {
                list1: ['Blueprint', 'LESS', 'SASS', 'Bootstrap'],
                listTitle1: 'css框架',
                list2: ['Node.js', 'Angular.js', 'Vue.js', 'jQuery', 'React'],
                listTitle2: 'js框架'
            }
        }
    },
    components: {
        shuttleBox
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>