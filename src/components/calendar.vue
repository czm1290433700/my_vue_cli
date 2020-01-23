<template>
    <div id="calendar">
        <input1></input1>
        <div class="calendarWidget">
            <div class="title">
                <div class="left" @click="yearBack()">
                    <i></i>
                    <i></i>
                </div>
                <div class="left" @click="monthBack()">
                    <i></i>
                </div>
                <div class="date">{{year}} 年 {{month}} 月</div>
                <div class="right" @click="monthAhead()">
                    <i></i>
                </div>
                <div class="right" @click="yearAhead()">
                    <i></i>
                    <i></i>
                </div>
            </div>
            <div class="week">
                <ul>
                    <li>日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                </ul>
            </div>
            <div class="calendarBody">
                <ul>
                    <li v-for="item in week1" :key="item.id">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="item in week2" :key="item.id">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="item in week3" :key="item.id">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="item in week4" :key="item.id">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="item in week5" :key="item.id">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="item in week6" :key="item.id">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import input1 from '@/components/input1'
export default {
    name: 'calendar',
    data() {
        return {
            year: 0,
            month: 0,
            week1: [1, 2, 3, 4, 5, 6, 7],
            week2: [1, 2, 3, 4, 5, 6, 7],
            week3: [1, 2, 3, 4, 5, 6, 7],
            week4: [1, 2, 3, 4, 5, 6, 7],
            week5: [1, 2, 3, 4, 5, 6, 7],
            week6: [1, 2, 3, 4, 5, 6, 7]
        }
    },
    mounted: function(){
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth() + 1;
        this.initCalendar();
    },
    components: {
        input1
    },
    methods: {
        /** 
         * 年份后退
         */
        yearBack: function(){
            this.year--;
            this.initCalendar();
        },
        /** 
         * 年份前进
         */
        yearAhead: function(){
            this.year++;
            this.initCalendar();
        },
        /** 
         * 月份后退
         */
        monthBack: function(){
            this.month--;
            this.initCalendar();
        },
        /** 
         * 月份前进
         */
        monthAhead: function(){
            this.month++;
            this.initCalendar();
        },
        /** 
         * 初始化日历body
         */
        initCalendar: function(){

        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/calendar.css";
</style>