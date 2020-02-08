<template>
    <div id="passwordInput">
        <ul class="inputs" @click="showBorder()">
            <li>
                <i v-if="dataArray.length >= 1"></i>
            </li>
            <li>
                <i v-if="dataArray.length >= 2"></i>
            </li>
            <li>
                <i v-if="dataArray.length >= 3"></i>
            </li>
            <li>
                <i v-if="dataArray.length >= 4"></i>
            </li>
            <li>
                <i v-if="dataArray.length >= 5"></i>
            </li>
            <li>
                <i v-if="dataArray.length >= 6"></i>
            </li>
        </ul>
        <numberkeyBorder ref="keyBorder" v-bind:storageDigit="6" @dataChange="updateArray()"></numberkeyBorder>
    </div>
</template>

<script>
import numberkeyBorder from '@/components/numberkeyBorder'
export default {
    name: 'passwordInput1',
    components: {
        numberkeyBorder
    },
    data() {
        return {
            dataArray: []
        }
    },
    methods: {
        /**
         * 显示键盘
         */
        showBorder: function(){
            this.$refs.keyBorder.show();
        },
        /**
         * 隐藏键盘
         */
        hideBorder: function(){
            this.$refs.keyBorder.hide();
        },
        /**
         * 更新数据数组
         */
        updateArray: function(){
            this.dataArray = this.$refs.keyBorder.dataArray;
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/passwordInput.css";
</style>