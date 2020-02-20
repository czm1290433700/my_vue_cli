<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基本用法</legend>
                <Divider1></Divider1>
            </fieldset>
            <fieldset>
                <legend>展示文本</legend>
                <Divider2 v-bind:text="'文本'"></Divider2>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import Divider1 from '@/components/Divider1'
import Divider2 from '@/components/Divider2'
export default {
    name: 'DateTimePicker',
    data() {
        return {
            title: 'Divider 分割线'
        }
    },
    components: {
        pageHeader, Divider1, Divider2
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>