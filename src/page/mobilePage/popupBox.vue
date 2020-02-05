<template>
    <div ref="contentDiv">
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <button class="button" type="button" @click="showPopup()">弹出弹出层</button>
            <popupBox ref="popupBox">
                <div slot="popupContent"></div>
            </popupBox>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import popupBox from '@/components/popupBox'
export default {
    name: 'popUpBox',
    data() {
        return {
            title: 'popupBox 弹窗',
        }
    },
    components: {
        pageHeader, popupBox
    },
    methods: {
        showPopup: function(){
            this.$refs.popupBox.show();
        },
        hidePopup: function(){
            this.$refs.popupBox.hide();
        }
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>