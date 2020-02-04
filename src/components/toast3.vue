<template>
    <div id="toast3">
        <loading1 v-bind:color="'#fff'"></loading1>
        <div class="content">{{content}}</div>
    </div>
</template>

<script>
import loading1 from '@/components/loading1'
export default {
    name: 'toast3',
    props: ['content'],
    components: {
        loading1
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/toast.css";
</style>