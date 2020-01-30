<template>
    <div class="pageArea">
        <fieldset>
            <legend>总页数低于页码总数</legend>
            <page v-bind:pageAmounts="page1"></page>
        </fieldset>
        <fieldset>
            <legend>总页数大于页码总数</legend>
            <page v-bind:pageAmounts="page2"></page>
        </fieldset>
    </div>
</template>

<script>
import page from '@/components/page'
export default {
    name: 'pagePage',
    data() {
        return {
            page1: {
                showPages: 5,
                totalPages: 5
            },
            page2: {
                showPages: 5,
                totalPages: 10
            }
        }
    },
    components: {
        page
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>