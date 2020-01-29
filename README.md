# my VueCli

### 项目介绍

这是一个基于vue-cli2的一个脚手架项目，里面总结了我平时实习学习自己写的一些组件<br>

pc端的ui样式参考layui官方文档样式（https://www.layui.com/demo） ，移动端ui样式参考vant移动端页面样式（https://youzan.github.io/vant/mobile.html#/zh-CN/） ，页面布局和js交互动画皆为用css和js独立完成

做了pc端和移动端的初始化判断，可以根据启动项目的设备类型显示不同类型的页面

### 包含内容

目前pc端组件有以下部分：

- 插件组件
    1.  **slideShow 轮播图**：做了几套轮播图，前三种主要基于绝对布局来实现，最后一种基于**css3**的**translate3d**属性来实现
    2.  **CityArea 城市选择**： ui样式参考华住会pc端wifi登录页面城市选择
    3.  **calendar 日历**: 基于win10日历规则实现，如果该月第一天日期为非周日，将加入前一个月的日期
    4.  **shuttleBox 穿梭框**:  样式参考layui穿梭框，实现过程中遇到数组和嵌套对象不存在get和set的问题导致的无法正常数据绑定，采用了属性监听和调用原生set方法赋值的办法解决，之后修改为用数组splice方法实现数组元素的双向绑定
- 表单组件
    1.  **input 文本框**：包括样式优化的输入框，密码框，和提供模糊查询的输入框
    2.  **table 表格**
    3.  **page 分页**
    4.  **fileUpload 文件上传**
    5.  **treeBox 树型框**
    6.  **select 选择框**： 目前只实现了一种样式的选择框，后面再慢慢补充
- 页面组件
    1.  **graph 统计图**： **（原点的坐标这里设计为应给x轴坐标数组）**
        - 柱状图： 基于canvas实现，绑定了对应的鼠标事件，并且做了防抖处理，解决了鼠标快速在canvas区域下移动导致的鼠标移出事件不能监听的问题
        - 折线图： 基于canvas实现，这里为了绑定事件的逻辑不要过于复杂，所以在鼠标移入显示数据后，没有做数据的移除，这样可以避免移除数据的同时移除掉底层线的一部分，导致需要重绘底层线的问题
    2.  **codeBox 代码框**
    3.  **icon 图标**： 封装了单箭头和双箭头，支持箭头颜色的可适配

移动端有以下部分：

- **mobileCityArea 城市选择**: ui样式参考华住会移动端wifi登录页面城市选择

- **enMobileCityArea 英文城市选择**

- **lazyLoading 图片懒加载**：基于**IntersectionObserver Api**实现

- **loading 加载**: 纯css3动画实现, 目前实现了3种loading效果，一种最常见的遮罩层loading,还有企鹅FM上专题活动的loading以及app中的常用loading

### 样式展示

- pc端首页页面<br>
![pc端图片](https://github.com/czm1290433700/my_vue_cli/blob/master/imgs/pc.png)
- 移动端首页页面<br>
![移动端图片](https://github.com/czm1290433700/my_vue_cli/blob/master/imgs/mobile.png)

### 运行项目

``` 
npm i  // 安装相关依赖
npm start // 启动项目
```

github链接：https://github.com/czm1290433700/my_vue_cli
