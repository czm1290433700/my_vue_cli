<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <cityArea></cityArea>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import cityArea from '@/components/enMobileCityArea'
export default {
    name: 'enMobileCityArea',
    data() {
        return {
            title: 'enmobileCityArea 英文城市选择'
        }
    },
    mounted: function(){
        document.body.style.overflowY = "hidden";
    },
    components: {
        pageHeader,
        cityArea
    }
}
</script>

<style scoped> 
    @import "../../style/mobilePage/global.css";
</style>