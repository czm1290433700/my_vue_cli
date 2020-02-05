<template>
    <div id="popupBox" v-show="showPopup">
        <slot name="popupContent"></slot>
    </div>
</template>

<script>
export default {
    name: 'popupBox',
    data() {
        return {
            showPopup: false,
        }
    },
    methods: {
        /**
         * 弹出层显示
         */
        show: function(){
            this.showPopup = true;
        },
        /**
         * 弹出层隐藏
         */
        hide: function(){
            this.showPopup = false;
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/popupBox.css";
</style>