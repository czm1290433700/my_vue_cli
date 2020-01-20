<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>loading1</legend>
                <Loading1></Loading1>
            </fieldset>
            <fieldset>
                <legend>Loading2</legend>
                <Loading2></Loading2>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import Loading1 from '@/components/loading1'
import Loading2 from '@/components/loading2'
export default {
    name: 'loading',
    data() {
        return {
            title: 'loading 加载'
        }
    },
    components: {
        pageHeader,
        Loading1,
        Loading2
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>