<template>
    <canvas :width="histogram.canvasWidth" :height="histogram.canvasHeight" ref="canvas"></canvas>
</template>

<script>
export default {
    name: 'histogram',
    props: ['histogram'],
    mounted: function(){
        this.ctx = this.$refs.canvas.getContext('2d');
        this.canvasWidth = this.$props.histogram.canvasWidth;
        this.canvasHeight = this.$props.histogram.canvasHeight;
        this.padding = this.$props.histogram.padding;
        this.xData = this.$props.histogram.xData;
        this.yData = this.$props.histogram.yData;
        this.data = this.$props.histogram.data;
        this.paintAxis();
        this.paintPoint();
        this.paintArrow();
        this.paintHistogram();
    },
    data() {
        return {
            ctx: {}, 
            canvasWidth: '',
            canvasHeight: '', 
            xData: [],
            yData: [],
            padding: 0, 
            data: []
        }
    },
    methods: {
        /**
         * 画坐标轴
         */
        paintAxis: function(){
            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            /** y轴线 */
            this.ctx.moveTo(this.padding + 0.5, this.canvasHeight - this.padding + 0.5); // 加0.5使得绘制的线更细
            this.ctx.lineTo(this.padding + 0.5, this.padding + 0.5);
            this.ctx.stroke();
            /** x轴线 */
            this.ctx.moveTo(this.padding + 0.5, this.canvasHeight - this.padding + 0.5);
            this.ctx.lineTo(this.canvasWidth - this.padding + 0.5, this.canvasHeight - this.padding + 0.5);
            this.ctx.stroke();
        },
        /**
         * 画坐标点
         */
        paintPoint: function(){
            var xLength = Math.floor((this.canvasWidth - this.padding * 2) / (this.xData.length - 0.5)); // x轴每段长度
            var yLength = Math.floor((this.canvasHeight - this.padding * 2) / (this.yData.length + 0.5)); // y轴每段长度
            this.ctx.beginPath();
            this.ctx.textAlign = 'center';
            /** x轴刻度和值 */
            for(let i = 0; i < this.xData.length; i++){
                this.ctx.moveTo(this.padding + xLength * i, this.canvasHeight - this.padding);
                this.ctx.lineTo(this.padding + xLength * i, this.canvasHeight - this.padding + 5);
                this.ctx.stroke(); // 画刻度
                this.ctx.fillText(this.xData[i], this.padding + xLength * i, this.canvasHeight - this.padding + 15);
            }
            /** y轴刻度和值 */
            for(let i = 0; i < this.yData.length; i++){
                this.ctx.moveTo(this.padding, this.canvasHeight - this.padding - yLength * (i + 1));
                this.ctx.lineTo(this.padding - 5, this.canvasHeight - this.padding - yLength * (i + 1));
                this.ctx.stroke(); // 画刻度
                this.ctx.fillText(this.yData[i], this.padding - 10, this.canvasHeight - this.padding - yLength * (i + 1) + 5);
            }
        },
        /**
         * 画柱状图
         */
        paintHistogram: function(){
            var xLength = Math.floor((this.canvasWidth - this.padding * 2) / (this.xData.length - 0.5)); // x轴每段长度
            var yLength = Math.floor((this.canvasHeight - this.padding * 2) / (this.yData.length + 0.5)); // y轴每段长度
            var _this = this;
            _this.ctx.fillStyle='#5FB878';
            for(let i = 0; i < this.data.length; i++){
                _this.ctx.fillRect(xLength * (i + 1 - 0.25) + _this.padding, _this.canvasHeight - _this.padding - yLength * _this.data[i], xLength / 2, yLength * _this.data[i]);
            }
        },
        /**
         * 画箭头
         */
        paintArrow: function(){
            /** y轴的箭头 */
            this.ctx.fillStyle = "#000";
            this.ctx.beginPath();
            this.ctx.moveTo(this.padding - 2.5, this.padding);
            this.ctx.lineTo(this.padding + 2.5, this.padding);
            this.ctx.lineTo(this.padding, this.padding - 7);
            this.ctx.closePath();
            this.ctx.stroke();
            /** x轴的箭头 */
            this.ctx.beginPath();
            this.ctx.moveTo(this.canvasWidth - this.padding, this.canvasHeight - this.padding - 2.5);
            this.ctx.lineTo(this.canvasWidth - this.padding, this.canvasHeight - this.padding + 2.5);
            this.ctx.lineTo(this.canvasWidth - this.padding + 7, this.canvasHeight - this.padding);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/histogram.css";
</style>