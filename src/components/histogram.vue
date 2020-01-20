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
            left: [],
            right: [],
            top: [],
            bottom: [],
            mousemoveIndex: -1 // 存放鼠标移入的矩形index
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
            this.ctx.fillStyle='#5FB878';
            for(let i = 0; i < this.data.length; i++){
                this.ctx.fillRect(xLength * (i + 1 - 0.25) + this.padding, this.canvasHeight - this.padding - yLength * this.data[i], xLength / 2, yLength * this.data[i]);
                this.left[i] = xLength * (i + 1 - 0.25) + this.padding;
                this.top[i] = this.canvasHeight - this.padding - yLength * this.data[i];
                this.right[i] = xLength * (i + 1 - 0.25) + this.padding + xLength / 2;
                this.bottom[i] = this.canvasHeight - this.padding - yLength * this.data[i] + yLength * this.data[i];
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
         * 鼠标监听
         */
        canvasOver: function(){
            var _this = this,
                xLength = Math.floor((this.canvasWidth - this.padding * 2) / (this.xData.length - 0.5)), // x轴每段长度
                yLength = Math.floor((this.canvasHeight - this.padding * 2) / (this.yData.length + 0.5)); // y轴每段长度
            this.$refs.canvas.addEventListener('mousemove', function(ev){
                var ev = ev || window.event;
                var flag = false;
                for (let i = 0; i < _this.data.length; i++){
                    if(ev.offsetX > _this.left[i] && ev.offsetX < _this.right[i] && ev.offsetY > _this.top[i] && ev.offsetY < _this.bottom[i]){
                        flag = true;
                        /** 避免鼠标在快速从一个矩形移动到另一个，导致有之前原先的矩形没有被恢复为原来的颜色 */
                        if(_this.mousemoveIndex){
                            _this.ctx.clearRect(_this.left[_this.mousemoveIndex - 1], _this.top[_this.mousemoveIndex - 1] - 15, xLength / 2, yLength * _this.data[_this.mousemoveIndex - 1] + 15);
                            _this.ctx.fillStyle = '#5FB878';
                            _this.ctx.fillRect(xLength * (_this.mousemoveIndex - 0.25) + _this.padding, _this.canvasHeight - _this.padding - yLength * _this.data[_this.mousemoveIndex - 1], xLength / 2, yLength * _this.data[_this.mousemoveIndex - 1]);
                            _this.mousemoveIndex = -1;
                        }
                        _this.mousemoveIndex = i + 1;
                        _this.ctx.clearRect(_this.left[i], _this.top[i], xLength / 2, yLength * _this.data[i]);
                        _this.ctx.fillStyle = '#009688';
                        _this.ctx.fillRect(xLength * (i + 1 - 0.25) + _this.padding, _this.canvasHeight - _this.padding - yLength * _this.data[i], xLength / 2, yLength * _this.data[i]);
                        _this.ctx.fillText(_this.data[i], (_this.left[i] + _this.right[i]) / 2, _this.top[i] - 5);
                    }
                }
                if(!flag && _this.mousemoveIndex){
                    _this.ctx.clearRect(_this.left[_this.mousemoveIndex - 1], _this.top[_this.mousemoveIndex - 1] - 15, xLength / 2, yLength * _this.data[_this.mousemoveIndex - 1] + 15);
                    _this.ctx.fillStyle = '#5FB878';
                    _this.ctx.fillRect(xLength * (_this.mousemoveIndex - 0.25) + _this.padding, _this.canvasHeight - _this.padding - yLength * _this.data[_this.mousemoveIndex - 1], xLength / 2, yLength * _this.data[_this.mousemoveIndex - 1]);
                    _this.mousemoveIndex = -1;
                }
            })
        }
    }
}
</script>

<style scoped>
    @import "../style/pcComponents/histogram.css";
</style>