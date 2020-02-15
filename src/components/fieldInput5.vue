<template>
    <div id="fieldInput5">
        <div class="title">{{title}}</div>
        <div class="content">
            <textarea ref="area" :maxlength="maxLength" :placeholder="defaultHint" @input="lengthChange()"></textarea>
            <div class="length">
                <span ref="length">0</span>/{{maxLength}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fieldInput5',
    props: ['title', 'defaultHint', 'maxLength'],
    methods: {
        /**
         * 文本域内容改变
         */
        lengthChange: function(){
            if(this.$refs.area.value.length >= this.$props.maxLength){
                this.$refs.length.style.color = 'red';
            }else{
                this.$refs.length.style.color = '#7C7C7C';
            }
            this.$refs.length.innerText = this.$refs.area.value.length;
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/fieldInput.css";
</style>