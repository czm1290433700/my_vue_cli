<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基本用法</legend>
            </fieldset>
            <fieldset>
                <legend>自定义类型</legend>
            </fieldset>
            <fieldset>
                <legend>禁用输入框</legend>
            </fieldset>
            <fieldset>
                <legend>表单验证输入框</legend>
            </fieldset>
            <fieldset>
                <legend>短信验证</legend>
            </fieldset>
            <fieldset>
                <legend>显示统计字数输入框</legend>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
export default {
    name: 'FieldInput',
    data() {
        return {
            title: 'FieldInput 输入框'
        }
    },
    components: {
        pageHeader
    }
}
</script>

<style scoped> 
    @import "../../style/mobilePage/global.css";
</style>