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
    2.  **table 表格**: 这里只给出一种可对数据排序的数据表格，考虑到表格的样式有很多类型，但往往只是几行css代码或者js代码就可以实现的，应该给开发者足够的空间，所以这里只给出一种样式的数据表格，目前该表格支持中文，英文和数字的排序，暂不支持中文数据和英文数据混杂的排序
    3.  **page 分页**: 分总页数低于和大于页码总数的情况，大于页码总数的情况实现了三种显示状态的转换
    4.  **treeBox 树型框**
    5.  **select 选择框**： 目前只实现了一种样式的选择框，后面再慢慢补充
- 页面组件
    1.  **graph 统计图**： **（原点的坐标这里设计为应给x轴坐标数组）**
        - 柱状图： 基于canvas实现，绑定了对应的鼠标事件，并且做了防抖处理，解决了鼠标快速在canvas区域下移动导致的鼠标移出事件不能监听的问题
        - 折线图： 基于canvas实现，这里为了绑定事件的逻辑不要过于复杂，所以在鼠标移入显示数据后，没有做数据的移除，这样可以避免移除数据的同时移除掉底层线的一部分，导致需要重绘底层线的问题
    2.  **codeBox 代码框**
    3.  **icon 图标**： 封装了单箭头和双箭头，支持箭头颜色的可适配

移动端有以下部分：

1.插件组件

- **mobileCityArea 城市选择**: ui样式参考华住会移动端wifi登录页面城市选择

- **enMobileCityArea 英文城市选择**

2.页面组件

- **loading 加载**: 纯css3动画实现, 目前实现了3种loading效果，一种最常见的遮罩层loading,还有企鹅FM上专题活动的loading以及app中的常用loading

- **lazyLoading 图片懒加载**：基于**IntersectionObserver Api**实现

- **calendar 日历**

- **DateTimePicker 时间选择**:实现了全部日期，年月日日期，和年月日期的三种时间选择

- **NumberKeyBorder 数字键盘**: 实现了移动端手机常用数字键盘，支持对输入内容的存储，以及对存储位数的配置

- **PasswordInput 密码输入框**: 实现了基础效果和明文密码输入，这里暂时没有对密码输入框的位数做出配置，直接设置为6位

3. 反馈组件

- **maskLayer 遮罩层**:使用了props双向绑定组件实现props的双向绑定

- **popWindow 弹窗**: 建议弹窗与遮罩层一起使用

- **popUpBox 弹出层**: 实现了块状区域的弹入弹出效果，其中内容可以自行配置

- **toast 轻提示**: 分为文字提示，长文字提示和加载提示，加载提示提供了三种加载提示的样式

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

### 感谢
项目开发过程中，调用了以下组件或者js：<br>
**博客园 @xxcanghai @小小沧海** ： https://github.com/xxcanghai/cnblogsFiles/blob/master/vue-mixins/propsync.js <br>
在此表示感谢


github链接：https://github.com/czm1290433700/my_vue_cli

# my VueCli
### Introduction to the project
This is a scaffolding project based on vue-cli2, which summarizes some components I learned to write by myself as an intern
The PC UI style reference layui official document style (https://www.layui.com/demo), the mobile end UI style reference vant mobile end page style (https://youzan.github.io/vant/mobile.html#/zh-CN/), page layout and js interactive animation are with CSS and js independently
Done PC and mobile terminal initialization judgment, you can launch the project according to the type of device to display different types of pages
### contains content
At present, the PC components have the following parts:
- plug-in components
1. **slideShow roving diagram** : several roving diagrams have been made, the first three are mainly based on absolute layout, and the last one is based on **css3** **translate3d** attributes
2. **CityArea city selection** : UI style refer to the wifi login page of HSC PC for city selection
3. **calendar**: based on win10 calendar rules, if the first day of the month is not a Sunday, the date of the previous month will be added
: the style refers to the layui shuttleBox. In the implementation process, we encountered the problem of array and nested objects without get and set, which led to the failure of normal data binding. We adopted the method of property monitoring and called the native set method to solve the problem, and then changed it to the method of array splice to realize the bidirectional binding of array elements
- form components
1. **input text box** : including style optimization input box, password box, and provide fuzzy query input box
2. **table**: Here give only a data table to sort the data, considering the style of the form has many types, but is often just a few lines of CSS code or the js code can be achieved, should be enough space for developers, so here give only a style of data table, the table currently supported Chinese, English and Numbers of sorting, temporarily does not support the mixed Chinese and English data sorting
3. **page**: There are cases where the total number of pages is lower than and greater than the total number of page Numbers.In the case of greater than the total number of page Numbers, three display state transitions are realized
4. **treeBox**
6. **select selection box** : only one style selection box has been implemented so far, which will be added later
- page components
1. **graph** : **(the coordinates of the origin are designed here to be an array of X-axis coordinates)**
- bar chart: based on the canvas implementation, the corresponding mouse events are bound, and the anti-shake processing is done to solve the problem that the mouse-out event caused by the mouse moving rapidly under the canvas area cannot be monitored
-line graph: based on the canvas implementation, in order to avoid too complicated logic of binding events, data was not removed after the mouse moved into the display data, so as to avoid removing part of the bottom line while removing the data, resulting in the need to redraw the bottom line
2. **codeBox**
3. **icon** : single arrow and double arrow are encapsulated, supporting the adaptable arrow color
The mobile terminal has the following parts:
1. Plug-in components
- **mobileCityArea city selection**: UI style refer to the wifi login page of HCSDC for city selection
- **enMobileCityArea**
2. Page components
- **loading**: pure css3 animation is implemented, which has realized three loading effects, one of the most common mask loading, as well as loading of special activities on penguin FM and loading commonly used in app
- **lazyLoading image lazyLoading** : implementation based on **IntersectionObserver Api**
- **calendar**
- **DateTimePicker time selection**: implements three time options for all dates, month/year/day dates, and month/day dates
- **NumberKeyBorder numeric keyboard**: realize the common number keyboard of mobile phone, support the storage of input content, and the configuration of storage bits
- **PasswordInput PasswordInput box**：Implemented the basic effect and plaintext password input, there is no password input box to configure the number of bits, directly set to 6
3. Callback components
- **maskLayer maskLayer**: The props bidirectional binding component is used to implement the props bidirectional binding
- **popWindow**: it is recommended to use popWindow with mask layer
- **popUpBox popup layer**: implements the popup effect of block area, where the content can be configured by itself
- **toast light prompt**: divided into text prompt, long text prompt and loading prompt, loading prompt provides three styles of loading prompt
### style presentation
- PC home page <br>
![PC pictures](https://github.com/czm1290433700/my_vue_cli/blob/master/imgs/pc.png)
- mobile home page <br>
![mobile pictures](https://github.com/czm1290433700/my_vue_cli/blob/master/imgs/mobile.png)
### Run the project
```
NPM I // installation dependencies
NPM start // start the project
```

### Thanks
During project development, the following components or js are called:<br>
**博客园 @xxcanghai @小小沧海** ： https://github.com/xxcanghai/cnblogsFiles/blob/master/vue-mixins/propsync.js <br>
Thank you very much!

github link: https://github.com/czm1290433700/my_vue_cli
