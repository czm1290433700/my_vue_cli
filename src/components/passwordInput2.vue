<template>
    <div id="passwordInput">
        <ul class="inputs" @click="showBorder()">
            <li>{{dataArray[0]}}</li>
            <li>{{dataArray[1]}}</li>
            <li>{{dataArray[2]}}</li>
            <li>{{dataArray[3]}}</li>
            <li>{{dataArray[4]}}</li>
            <li>{{dataArray[5]}}</li>
        </ul>
        <numberkeyBorder ref="keyBorder" v-bind:storageDigit="6" @dataChange="updateArray()"></numberkeyBorder>
    </div>
</template>

<script>
import numberkeyBorder from '@/components/numberkeyBorder'
export default {
    name: 'passwordInput2',
    data() {
        return {
            dataArray: []
        }
    },
    components: {
        numberkeyBorder
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