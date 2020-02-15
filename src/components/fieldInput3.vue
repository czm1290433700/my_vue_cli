<template>
    <div id="fieldInput3">
        <div class="title">{{title}}</div>
        <div class="content">
            <input ref="input" type="text" :placeholder="defaultHint" @blur="inputTest()">
            <span class="alert" ref="alert"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fieldInput3',
    props: ['type'],
    data () {
        return {
            title: '',
            defaultHint: ''
        }
    },
    mounted () {
        if(this.$props.type == "phone"){
            this.title = '手机号';
            this.defaultHint = '请输入手机号';
        }else if(this.$props.type == 'email'){
            this.title = '邮箱';
            this.defaultHint = '请输入邮箱';
        }
    },
    methods: {
        /** 
         * 输入框表单验证
         */
        inputTest: function(){
            var text = this.$refs.input.value;
            if(this.$props.type == 'phone'){
                if(!(/^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/.test(text))){
                    this.$refs.alert.innerText = '无效手机号';
                }else{
                    this.$refs.alert.innerText = '';
                }
            }else{
                if(!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(text))){
                    this.$refs.alert.innerText = '无效邮箱';
                }else{
                    this.$refs.alert.innerText = '';
                }
            }
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/fieldInput.css";
</style>