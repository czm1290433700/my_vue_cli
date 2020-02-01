<template>
    <div class="pageArea">
        <fieldset>
            <legend>默认修饰</legend>
            <codeBox1 v-bind:codes="codes"></codeBox1>
        </fieldset>
        <fieldset>
            <legend>notepad风格</legend>
            <codeBox2 v-bind:codes="codes"></codeBox2>
        </fieldset>
    </div>
</template>

<script>
import codeBox1 from '@/components/codeBox1'
import codeBox2 from '@/components/codeBox2'
export default {
    name: 'codeBoxPage',
    data(){
        return {
            codes: {
                codeTitle: 'my_vue_cli',
                code: [
                    '/**',
                    ' * 移到下一页',
                    ' */',
                    'moveDown: function(){',
                    '   this.currentPage < this.$props.pageAmounts.totalPages ? this.currentPage++ : \'\';',
                    '}'
                ]
            }
        }
    },
    components: {
        codeBox1, codeBox2
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>