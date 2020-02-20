<template>
    <div id="countDown">
        <span>{{hours}}</span>:<span>{{minutes}}</span>:<span>{{seconds}}</span>
    </div>
</template>

<script>
export default {
    name: 'CountDown1',
    props: ['time'],
    data() {
        return {
            hours: this.$props.time.hour,
            minutes: this.$props.time.minute,
            seconds: this.$props.time.second
        }
    },
    mounted () {
        var _this = this,
            timer = setInterval(function(){
            if(_this.seconds == 0){
                if(_this.minutes == 0){
                    if(_this.hours == 0){
                        clearInterval(timer);
                    }else{
                        _this.hours--;
                        _this.minutes = 59;
                        _this.seconds = 59;
                    }
                }else{
                    _this.minutes--;
                    _this.seconds = 59;
                }
            }else{
                _this.seconds--;
            }
        }, 1000)
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/CountDown.css";
</style>