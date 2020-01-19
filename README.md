# my VueCli

### 项目介绍

这是一个基于vue-cli2的一个脚手架项目，里面总结了我平时实习学习自己写的一些组件<br>

pc端的ui样式参考layui官方文档样式（https://www.layui.com/demo） ，移动端ui样式参考vant移动端页面样式（https://youzan.github.io/vant/mobile.html#/zh-CN/） ，页面布局和js交互动画皆为用css和js独立完成

做了pc端和移动端的初始化判断，可以根据启动项目的设备类型显示不同类型的页面

### 包含内容

目前pc端组件有以下部分：

- 插件组件
    1.  slideShow 轮播图：做了几套轮播图，前三种主要基于绝对布局来实现，最后一种基于css3的translate3d属性来实现
    2.  CityArea 城市选择： ui样式参考华住会pc端wifi登录页面城市选择
- 表单组件
    1.  input 文本框：包括样式优化的输入框，密码框，和提供模糊查询的输入框
- 页面组件
    1.  graph 统计图：包括折线统计图和条形统计图

移动端有以下部分：

- mobileCityArea 城市选择: ui样式参考华住会移动端wifi登录页面城市选择

- enMobileCityArea 英文城市选择

- lazyLoading 图片懒加载：基于IntersectionObserver Api实现

- loading 加载: 纯css3动画实现

### 样式展示

- pc端首页页面<br>
![pc端图片](imgs/pc.png?raw=true)
- 移动端首页页面<br>
![移动端图片](imgs/mobile.png?raw=true)

### 运行项目

``` 
npm i  // 安装相关依赖
npm start // 启动项目
```

github链接：https://github.com/czm1290433700/my_vue_cli