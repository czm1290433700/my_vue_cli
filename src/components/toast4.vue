<template>
    <div id="toast4">
        <loading2 v-bind:color="'#fff'"></loading2>
        <div class="content">{{content}}</div>
    </div>
</template>

<script>
import loading2 from '@/components/loading2'
export default {
    name: 'toast4',
    props: ['content'],
    components: {
        loading2
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/toast.css";
</style>