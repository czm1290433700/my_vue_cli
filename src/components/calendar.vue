<template>
    <div id="calendar">
        <input type="text" class="timeInput" placeholder="请选择时间" @focus="calendarShow = true"/>
        <div class="calendarWidget" v-show="calendarShow">
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
                <ul ref="week1">
                    <li v-for="item in week1" :key="item.id" @click="chooseDate($event)">{{item}}</li>
                </ul>
                <ul ref="week2">
                    <li v-for="item in week2" :key="item.id" @click="chooseDate($event)">{{item}}</li>
                </ul>
                <ul ref="week3">
                    <li v-for="item in week3" :key="item.id" @click="chooseDate($event)">{{item}}</li>
                </ul>
                <ul ref="week4">
                    <li v-for="item in week4" :key="item.id" @click="chooseDate($event)">{{item}}</li>
                </ul>
                <ul ref="week5">
                    <li v-for="item in week5" :key="item.id" @click="chooseDate($event)">{{item}}</li>
                </ul>
                <ul ref="week6">
                    <li v-for="item in week6" :key="item.id" @click="chooseDate($event)">{{item}}</li>
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
            calendarShow: false,
            year: 0,
            month: 0,
            lastMonthDays: 0, // 上月显示天数
            nextMonthDays: 0, // 下月显示天数
            todayWeek: 0, // 今天的周数
            todayIndex: 0, // 今天在对应周的天数
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
            if(this.month == 1){
                this.month = 12;
                this.year--;
            }else{
                this.month--;
            }
            this.initCalendar();
        },
        /** 
         * 月份前进
         */
        monthAhead: function(){
            if(this.month == 12){
                this.month = 1;
                this.year++;
            }else{
                this.month++;
            }
            this.initCalendar();
        },
        /** 
         * 初始化日历日期
         */
        initCalendar: function(){
            /**清除所有的类样式 */
            for(let i = 0; i < 7; i++){
                this.$refs.week1.children[i].classList.remove("notThisMonth");
                this.$refs.week1.children[i].classList.remove("today");
                this.$refs.week2.children[i].classList.remove("notThisMonth");
                this.$refs.week2.children[i].classList.remove("today");
                this.$refs.week3.children[i].classList.remove("notThisMonth");
                this.$refs.week3.children[i].classList.remove("today");
                this.$refs.week4.children[i].classList.remove("notThisMonth");
                this.$refs.week4.children[i].classList.remove("today");
                this.$refs.week5.children[i].classList.remove("notThisMonth");
                this.$refs.week5.children[i].classList.remove("today");
                this.$refs.week6.children[i].classList.remove("notThisMonth");
                this.$refs.week6.children[i].classList.remove("today");
            }
            /** 清空日期和上月下月显示天数 */
            this.week1.length = 0;
            this.week2.length = 0;
            this.week3.length = 0;
            this.week4.length = 0;
            this.week5.length = 0;
            this.week6.length = 0;
            this.lastMonthDays = 0;
            this.nextMonthDays = 0;
            var firstDay = new Date(this.year, this.month - 1, 1).getDay(), // 该月第一天对应星期
                monthdays = new Date(this.year, this.month, 0).getDate(), // 该月的天数
                lastDate = new Date(this.year, this.month - 1, 0).getDate(), // 上个月的最后一天日期
                todayYear = new Date().getFullYear(),
                todayMonth = new Date().getMonth() + 1,
                todayDate = new Date().getDate(); // 今天的日期
            if(firstDay != 0){
                /** 如果该月第一天不是星期日，那么需要在week1数组中放入上月最后的天数进来 */
                for(let i = 0, j = lastDate - firstDay + 1; i < firstDay; i++, j++){
                    this.week1.push(j);
                    this.lastMonthDays++;
                }
            }
            /** 放入该月天数 */
            for(let i = 1; i <= monthdays; i++){
                if(this.week1.length < 7){
                    this.week1.push(i);
                    if(this.year == todayYear && this.month == todayMonth && this.year == todayYear && this.month == todayMonth && i == todayDate){
                        this.initTodayColor(1, this.week1.length - 1);
                    }
                }else{
                    if(this.week2.length < 7){
                        this.week2.push(i);
                        if(this.year == todayYear && this.month == todayMonth && i == todayDate){
                            this.initTodayColor(2, this.week2.length - 1);
                        }
                    }else{
                        if(this.week3.length < 7){
                            this.week3.push(i);
                            if(this.year == todayYear && this.month == todayMonth && i == todayDate){
                                this.initTodayColor(3, this.week3.length - 1);
                            }
                        }else{
                            if(this.week4.length < 7){
                                this.week4.push(i);
                                if(this.year == todayYear && this.month == todayMonth && i == todayDate){
                                    this.initTodayColor(4, this.week4.length - 1);
                                }
                            }else{
                                if(this.week5.length < 7){
                                    this.week5.push(i);
                                    if(this.year == todayYear && this.month == todayMonth && i == todayDate){
                                        this.initTodayColor(5, this.week5.length - 1);
                                    }
                                }else{
                                    this.week6.push(i);
                                    if(this.year == todayYear && this.month == todayMonth && i == todayDate){
                                        this.initTodayColor(6, this.week6.length - 1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            /** 放入下月天数 */
            for(let i = 1;;i++){
                if(this.week5.length < 7){
                    this.week5.push(i);
                    this.nextMonthDays++;
                }else{
                    if(this.week6.length < 7){
                        this.week6.push(i);
                        this.nextMonthDays++;
                    }else{
                        break;
                    }
                }
            }
            this.initCalendarColor();
        },
        /** 
         * 初始化日历字体颜色
         */
        initCalendarColor: function(){
            /**初始化上个月的颜色 */
            for(let i = 0; i < this.lastMonthDays; i++){
                this.$refs.week1.children[i].classList.add("notThisMonth");
            }
            /**初始化下个月的颜色 */
            if(this.nextMonthDays <= 7){
                for(let i = 6; i >= 7 - this.nextMonthDays; i--){
                    this.$refs.week6.children[i].classList.add("notThisMonth");
                }
            }else{
                /** 初始化第五周下个月的颜色 */
                for(let i = 6; i >= 14 - this.nextMonthDays; i--){
                    this.$refs.week5.children[i].classList.add("notThisMonth");
                }
                /** 初始化第六周下个月的颜色 */
                for(let i = 0; i < 7; i++){
                    this.$refs.week6.children[i].classList.add("notThisMonth");
                }
            }
        },
        /**
         * 初始化日历当日字体颜色
         */
        initTodayColor: function(weekIndex, dayIndex){
            switch(weekIndex){
                case 1:
                    this.$refs.week1.children[dayIndex].classList.add("today");
                    break;
                case 2:
                    this.$refs.week2.children[dayIndex].classList.add("today");
                    break;
                case 3:
                    this.$refs.week3.children[dayIndex].classList.add("today");
                    break;
                case 4:
                    this.$refs.week4.children[dayIndex].classList.add("today");
                    break;
                case 5:
                    this.$refs.week5.children[dayIndex].classList.add("today");
                    break;
                case 6:
                    this.$refs.week6.children[dayIndex].classList.add("today");
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/calendar.css";
</style>