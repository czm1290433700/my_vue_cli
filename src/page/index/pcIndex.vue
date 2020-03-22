<template>
    <div id="pcIndex">
      <div class="header">
        <span class="title">My VueCli</span>
        <ul>
          <li class="active">示例</li>
          <li @click="goGitHub()">github</li>
        </ul>
      </div>
      <div class="navArea">
        <div class="nav">
          <ul v-for="item in content" :key="item.id">
            <li>
              <div class="title" @click="clickElement($event)" @mouseover="mouseOverTitle($event)" @mouseleave="mouseLeaveTitle($event)">
                <span>{{item.name}}</span><i></i>
              </div>
              <dl>
                <dd v-for="item in item.construction" :key="item.id" @click="cutBodyContent($event, item)" @mouseover="mouseOverDDElement($event)" @mouseleave="mouseLeaveDDElement($event)" ref="ddElement">{{item.name}}</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="body">
        <ul>
          <li class="active" @click="cutMode(1)" ref="bodyList1">预览</li>
          <li @click="cutMode(2)" ref="bodyList2">代码示例</li>
        </ul>
        <div class="body-content">
          <iframe src="/pcPage/slideShow" ref="bodyContent"></iframe>
          <iframe src="/introduces/slideShow" ref="bodyIntroduce" style="display:none;"></iframe>
        </div>
      </div>
    </div>
</template>

<script>
import tools from '@/utils/tool.js'
export default {
  name: 'pcIndex',
  data() {
    return {
      content: [
        {
          name: '插件组件',
          construction:[
            {
              name: 'slideShow 轮播图',
              url: '/pcPage/slideShow',
              introduce: '/introduces/slideShow'
            },
            {
              name: 'CityArea 城市选择',
              url: '/pcPage/cityArea',
              introduce: '/introduces/cityArea'
            },
            {
              name: 'calendar 日历控件',
              url: '/pcPage/calendarWidgets',
              introduce: '/introduces/calendarWidgets'
            },
            {
              name: 'shuttleBox 穿梭框',
              url: '/pcPage/shuttleBox'
            }
          ]
        },
        {
          name: '表单组件',
          construction:[
            {
              name: 'input 文本框',
              url: '/pcPage/input'
            },
            {
              name: 'table 表格',
              url: '/pcPage/table'
            },
            {
              name: 'page 分页',
              url: '/pcPage/page'
            },
            {
              name: 'treeBox 树型框',
              url: '/pcPage/treeBox'
            },
            {
              name: 'select 选择框',
              url: '/pcPage/select'
            }
          ]
        },
        {
          name: '页面组件',
          construction:[
            {
              name: 'graph 统计图',
              url: '/pcPage/graph'
            },
            {
              name: 'codeBox 代码框',
              url: '/pcPage/codeBox'
            },
            {
              name: 'icon 图标',
              url: '/pcPage/icon'
            },
            {
              name: 'colorPicker 颜色选择器',
              url: '/pcPage/colorPicker'
            },
            {
              name: 'grade 评分',
              url: '/pcPage/grade'
            },
            {
              name: 'timeline 时间线',
              url: '/pcPage/timeline'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    /**禁掉body的自带滚动栏，避免与iframe的重复影响页面样式 */
    document.body.style.overflowY = "hidden";
    tools.addClass(this.$refs.ddElement[0], "active");
  },
  methods: {
    /**
     * 跳转github
     */
    goGitHub: function(){
      window.location.href = "https://github.com/czm1290433700/my_vue_cli";
    },
    /**
     * 点击导航元素
     */
    clickElement: function(item){
      let dlElement = item.currentTarget.nextElementSibling,
          iElement = item.currentTarget.childNodes[1];
      if(dlElement.style.display == "none" || dlElement.style.display == ""){
        dlElement.style.display = "block";
        iElement.style.borderTop = "6px solid transparent";
        iElement.style.borderBottom = "6px solid #C4C5C9";
        iElement.style.top = "11px";
      }else{
        dlElement.style.display = "none";
        iElement.style.borderBottom = "6px solid transparent";
        iElement.style.borderTop = "6px solid #C4C5C9";
        iElement.style.top = "18px";
      }
    },
    /**
     * 切换bodyContent
     */
    cutBodyContent: function(item, obj){
      this.$refs.bodyContent.src = obj.url;
      this.$refs.bodyIntroduce.src = obj.introduce;
      for(let i = 0; i < this.$refs.ddElement.length; i++){
        if(tools.hasClass(this.$refs.ddElement[i], "active")){
          tools.removeClass(this.$refs.ddElement[i], "active");
        }
      }
      tools.addClass(item.currentTarget, "active");
    },
    /**
     * 鼠标移入title类元素事件
     */
    mouseOverTitle: function(item){
      item.currentTarget.style.backgroundColor = "#4E5465";
      item.currentTarget.style.borderLeft = "6px solid #009688";
    },
    /**
     * 鼠标移出title类元素事件
     */
    mouseLeaveTitle: function(item){
      item.currentTarget.style.backgroundColor = "#393D49";
      item.currentTarget.style.borderLeft = "none";
    },
    /**
     * 鼠标移入dd元素事件
     */
    mouseOverDDElement: function(item){
      item.currentTarget.style.color = "#fff";
      item.currentTarget.parentNode.parentNode.childNodes[0].style.borderLeft = "6px solid #009688";
    },
    /**
     * 鼠标移出dd元素事件
     */
    mouseLeaveDDElement: function(item){
      if(!tools.hasClass(item.currentTarget, "active")){
        item.currentTarget.style.color = "#BFC0C2";
      }
      item.currentTarget.parentNode.parentNode.childNodes[0].style.borderLeft = "none";
    },
    /**
     * 切换模式
     */
    cutMode: function(index){
      if(index == 1){
        this.$refs.bodyList1.classList.add('active');
        this.$refs.bodyList2.classList.remove('active');
        this.$refs.bodyContent.style.display = 'block';
        this.$refs.bodyIntroduce.style.display = 'none';
      }else{
        this.$refs.bodyList1.classList.remove('active');
        this.$refs.bodyList2.classList.add('active');
        this.$refs.bodyContent.style.display = 'none';
        this.$refs.bodyIntroduce.style.display = 'block';
      }
    }
  }
}
</script>

<style scoped>
  @import "../../style/index/pcIndex.css";
  @import "../../style/pcPage/global.css";
</style>