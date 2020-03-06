<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基础用法</legend>
                <Pagination1 v-bind:pages="5"></Pagination1>
            </fieldset>
            <fieldset>
                <legend>简单模式</legend>
                <Pagination2 v-bind:pages="12"></Pagination2>
            </fieldset>
            <fieldset>
                <legend>显示省略号</legend>
                <Pagination3 v-bind:pages="12"></Pagination3>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import Pagination1 from '@/components/Pagination1'
import Pagination2 from '@/components/Pagination2'
import Pagination3 from '@/components/Pagination3'
export default {
    name: 'Pagination',
    data() {
        return {
            title: 'Pagination 分页'
        }
    },
    components: {
        pageHeader, Pagination1, Pagination2, Pagination3
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>