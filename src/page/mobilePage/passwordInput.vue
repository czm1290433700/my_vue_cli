<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>基础用法</legend>
                <passwordInput1></passwordInput1>
            </fieldset>
            <fieldset>
                <legend>明文展示</legend>
                <passwordInput2></passwordInput2>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import passwordInput1 from '@/components/passwordInput1'
import passwordInput2 from '@/components/passwordInput2'
export default {
    name: 'passwordInputPage',
    data() {
        return {
            title: 'passwordInput 密码输入框'
        }
    },
    components: {
        pageHeader, passwordInput1, passwordInput2
    }
}
</script>

<style scoped> 
    @import "../../style/mobilePage/global.css";
</style>