<template>
    <div id="toast5">
        <loading3 v-bind:color="'#fff'"></loading3>
        <div class="content">{{content}}</div>
    </div>
</template>

<script>
import loading3 from '@/components/loading3'
export default {
    name: 'toast5',
    props: ['content'],
    components: {
        loading3
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/toast.css";
</style>