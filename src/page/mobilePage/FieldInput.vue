<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基本用法</legend>
                <fieldInput1 v-bind:defaultHint="'请输入文本'"></fieldInput1>
            </fieldset>
            <fieldset>
                <legend>自定义类型</legend>
                <fieldInput2 v-bind:defaultHint="'请输入文本'" v-bind:title="'文本'"></fieldInput2>
                <fieldInput2 v-bind:defaultHint="'请输入手机号'" v-bind:title="'手机号'"></fieldInput2>
                <fieldInput2 v-bind:defaultHint="'请输入密码'" v-bind:title="'密码'"></fieldInput2>
            </fieldset>
            <fieldset>
                <legend>禁用输入框</legend>
                <fieldInput2 v-bind:defaultHint="'输入框只读'" v-bind:title="'文本'" v-bind:isReadonly="true"></fieldInput2>
                <fieldInput2 v-bind:defaultHint="'输入框已禁用'" v-bind:title="'手机号'" v-bind:isDisabled="true"></fieldInput2>
            </fieldset>
            <fieldset>
                <legend>表单验证输入框</legend>
            </fieldset>
            <fieldset>
                <legend>短信验证</legend>
                <fieldInput4></fieldInput4>
            </fieldset>
            <fieldset>
                <legend>显示统计字数输入框</legend>
                <fieldInput5 v-bind:title="'留言'" v-bind:maxLength="50" v-bind:defaultHint="'请输入留言'"></fieldInput5>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import fieldInput1 from '@/components/fieldInput1'
import fieldInput2 from '@/components/fieldInput2'
import fieldInput4 from '@/components/fieldInput4'
import fieldInput5 from '@/components/fieldInput5'
export default {
    name: 'FieldInput',
    data() {
        return {
            title: 'FieldInput 输入框'
        }
    },
    components: {
        pageHeader, fieldInput1, fieldInput2, fieldInput4, fieldInput5
    }
}
</script>

<style scoped> 
    @import "../../style/mobilePage/global.css";
</style>