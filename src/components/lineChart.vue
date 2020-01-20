<template>
    <canvas :width="linechart.canvasWidth" :height="linechart.canvasHeight" ref="canvas"></canvas>
</template>

<script>
import tools from '@/utils/tool.js'
export default {
    name: 'linechart',
    props: ['linechart'],
    mounted: function(){
        this.ctx = this.$refs.canvas.getContext('2d');
        this.canvasWidth = this.$props.linechart.canvasWidth;
        this.canvasHeight = this.$props.linechart.canvasHeight;
        this.padding = this.$props.linechart.padding;
        this.xData = this.$props.linechart.xData;
        this.yData = this.$props.linechart.yData;
        this.data = this.$props.linechart.data;
        this.xLength = Math.floor((this.$props.linechart.canvasWidth - this.$props.linechart.padding * 2) / (this.$props.linechart.xData.length - 0.5));
        this.yLength = Math.floor((this.$props.linechart.canvasHeight - this.$props.linechart.padding * 2) / (this.$props.linechart.yData.length + 0.5));
        this.paintAxis();
        this.paintPoint();
        this.paintArrow();
        this.paintBackgroundLine();
        this.paintBrokenLine();
        this.canvasOver();
    },
    data() {
        return {
            ctx: {}, 
            canvasWidth: '',
            canvasHeight: '', 
            xData: [],
            yData: [],
            padding: 0, 
            data: [],
            xLength: 0,
            yLength: 0,
            /** coord用来存放data点的x,y坐标 */
            xcoord: [], 
            ycoord: [],
            mousemoveIndex: 0
        }
    },
    methods: {
        /**
         * 画坐标轴
         */
        paintAxis: function(){
            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            /** x轴 */
            this.ctx.moveTo(this.padding + 0.5, this.canvasHeight - this.padding + 0.5);
            this.ctx.lineTo(this.canvasWidth - this.padding + 0.5, this.canvasHeight - this.padding + 0.5);
            this.ctx.stroke();
            /** y轴 */ 
            this.ctx.moveTo(this.padding + 0.5, this.padding + 0.5);
            this.ctx.lineTo(this.padding + 0.5, this.canvasHeight - this.padding + 0.5);
            this.ctx.stroke();
        },
        /**
         * 画坐标点
         */
        paintPoint: function(){
            this.ctx.textAlign = 'center';
            /** x轴 */
            for(let i = 0; i < this.xData.length; i++){
                /** 画刻度 */
                this.ctx.beginPath();
                this.ctx.moveTo(this.padding + this.xLength * i, this.canvasHeight - this.padding);
                this.ctx.lineTo(this.padding + this.xLength * i, this.canvasHeight - this.padding + 5);
                this.ctx.stroke();
                /** 写坐标值 */
                this.ctx.fillText(this.xData[i], this.padding + this.xLength * i, this.canvasHeight - this.padding + 15);
            }
            /** y轴 */
            for(let i = 0; i < this.yData.length; i++){
                /** 画刻度 */
                this.ctx.beginPath();
                this.ctx.moveTo(this.padding - 5, this.canvasHeight - this.padding - this.yLength * (i + 1));
                this.ctx.lineTo(this.padding, this.canvasHeight - this.padding - this.yLength * (i + 1));
                this.ctx.stroke(); 
                /** 写坐标值 */
                this.ctx.fillText(this.yData[i], this.padding - 10, this.canvasHeight - this.padding - this.yLength * (i + 1) + 5);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            }
        },
        /**
         * 画箭头
         */
        paintArrow: function(){
            /** x轴的箭头 */
            this.ctx.beginPath();
            this.ctx.moveTo(this.canvasWidth - this.padding, this.canvasHeight - this.padding - 2.5);
            this.ctx.lineTo(this.canvasWidth - this.padding, this.canvasHeight - this.padding + 2.5);
            this.ctx.lineTo(this.canvasWidth - this.padding + 7, this.canvasHeight - this.padding);
            this.ctx.closePath();
            this.ctx.stroke();
            /** y轴的箭头 */
            this.ctx.beginPath();
            this.ctx.moveTo(this.padding - 2.5, this.padding);
            this.ctx.lineTo(this.padding + 2.5, this.padding);
            this.ctx.lineTo(this.padding, this.padding - 7);
            this.ctx.closePath();
            this.ctx.stroke();
        },
        /**
         * 画图表底线
         */
        paintBackgroundLine: function(){
            /** x方向 */
            for(let i = 0; i < this.yData.length; i++){
                this.ctx.beginPath();
                this.ctx.moveTo(this.padding + 0.5, this.canvasHeight - this.padding - this.yLength * (i + 1) + 0.5);
                this.ctx.lineTo(this.padding + this.xLength * (this.xData.length - 1) + 0.5, this.canvasHeight - this.padding - this.yLength * (i + 1) + 0.5);
                this.ctx.strokeStyle = "#dddddd";
                this.ctx.stroke();
            }
            /** y方向 */
            for(let i = 0; i < this.xData.length - 1; i++){
                this.ctx.beginPath();
                this.ctx.moveTo(this.padding + this.xLength * (i + 1), this.canvasHeight - this.padding);
                this.ctx.lineTo(this.padding + this.xLength * (i + 1), this.canvasHeight - this.padding - this.yLength * (this.yData.length));
                this.ctx.strokeStyle = "#dddddd";
                this.ctx.stroke();
            }
        },
        /**
         * 画折线
         */
        paintBrokenLine: function(){
            for(let i = 0; i < this.data.length; i++){
                this.ctx.beginPath();
                this.ctx.strokeStyle = '#5FB878';
                this.ctx.lineWidth = 2;
                this.ctx.arc(this.padding + this.xLength * (i + 1), this.canvasHeight - this.padding - this.data[i] * this.yLength, 2.5, 0, 2 * Math.PI);
                this.xcoord.push(this.padding + this.xLength * (i + 1));
                this.ycoord.push(this.canvasHeight - this.padding - this.data[i] * this.yLength);
                this.ctx.fillStyle = '#5FB878';
                this.ctx.fill();
                this.ctx.stroke();
                if(i == 0){
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.padding, this.canvasHeight - this.padding);
                    this.ctx.lineTo(this.padding + this.xLength * (i + 1), this.canvasHeight - this.padding - this.data[i] * this.yLength - 3);
                    this.ctx.stroke();
                }else{
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.padding + this.xLength * i, this.canvasHeight - this.padding - this.data[i - 1] * this.yLength);
                    this.ctx.lineTo(this.padding + this.xLength * (i + 1), this.canvasHeight - this.padding - this.data[i] * this.yLength);
                    this.ctx.stroke();
                }
            }
        },
        /**
         * 鼠标监听
         */
        canvasOver: function(){
            let _this = this;
            this.$refs.canvas.addEventListener('mousemove', function(ev){
                var ev = ev || window.event;
                var flag = false;
                for (let i = 0; i < _this.data.length; i++){
                    if(Math.sqrt(Math.pow(_this.xcoord[i] - ev.offsetX, 2) + Math.pow(_this.ycoord[i] - ev.offsetY, 2)) <= 2.5){
                        flag = true;
                        _this.mousemoveIndex = i + 1;
                        tools.clearArcFun(_this.xcoord[i], _this.ycoord[i], 2.5, _this.ctx);
                        _this.ctx.beginPath();
                        _this.ctx.arc(_this.padding + _this.xLength * (i + 1), _this.canvasHeight - _this.padding - _this.data[i] * _this.yLength, 2.5, 0, 2 * Math.PI);
                        _this.ctx.fillStyle = '#00645D';
                        _this.ctx.fill();
                        _this.ctx.fillText(_this.data[i], _this.padding + _this.xLength * (i + 1), _this.canvasHeight - _this.padding - _this.data[i] * _this.yLength - 15);
                        _this.ctx.stroke();
                        _this.ctx.closePath();
                    }
                }
            })
        }
    }
}
</script>

<style scoped>

</style>