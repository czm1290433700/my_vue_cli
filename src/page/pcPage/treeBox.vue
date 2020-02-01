<template>
    <div class="pageArea">
        <fieldset>
            <legend>树形框</legend>
            <treeBox></treeBox>
        </fieldset>
    </div>
</template>

<script>
import treeBox from '@/components/treeBox'
export default {
    name: 'treeBoxPage',
    components: {
        treeBox
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
</style>