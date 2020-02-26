<template>
    <div id="steps2">
        <ul>
            <template v-for="(item, index) in list">
                <li :key="index" :class="activeIndex >= index ? 'active' : ''"> 
                    <div class="circle"></div>
                    <span :style="activeIndex == index ? 'color: #07C160' : ''">{{item}}</span>
                    <div class="line" v-if="index > 0"></div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'steps2',
    props: ['list'],
    data() {
        return {
            activeIndex: 0
        }
    },
    methods: {
        /**
         * 进入下一阶段
         */
        goNextStep: function(){
            this.activeIndex = this.activeIndex == this.$props.list.length - 1 ? 0 : this.activeIndex + 1;
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/steps.css";
</style>