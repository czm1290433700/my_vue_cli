/**
 * 将数组转化为一个用逗号分隔的字符串
 * @param {Array Object} arr 
 */
function arrToStringByComma(arr){
    var res = "";
    arr.forEach((item, index, array) => {
        index == 0 ? res += item : res += ',' + item;
    });
    return res;
}

/**
 * 将时间戳转换为时间字符串
 * @param {String} timestamp 
 */
function transformDate(timestamp){
    var newDate = new Date(timestamp);
    var month = newDate.getMonth() + 1;
    var date = newDate.getDate();
    return month + "." + date;
}

/**
 * 将页面动画回到顶部
 */
function topBack(){
    let id = setInterval(frame, 1);
    function frame(){
        if(document.documentElement.scrollTop || document.body.scrollTop){
            if(document.body.scrollTop){
                document.body.scrollTop = document.body.scrollTop - 20;
            }
            if(document.documentElement.scrollTop){
                document.documentElement.scrollTop = document.documentElement.scrollTop - 20;
            }
        }else{
            clearInterval(id);
        }
    }
}

/**
 * 获取今明的时间戳
 */
function getDateNumber(){
    var todayDate = Number(new Date()),//今天的时间戳
        tomorrowDate = Number(new Date().setTime(new Date().getTime() + 24*60*60*1000));//明天的时间戳
    return "今天时间戳为" + todayDate + ",明天时间戳为" + tomorrowDate;
}

/**
 * 判断元素是否有某类
 * @param {*} elements 
 * @param {*} cName 
 */
function hasClass( elements,cName ){ 
    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
}; 

/**
 * 为DOM元素增加类
 * @param {*} elements 
 * @param {*} cName 
 */
function addClass( elements,cName ){ 
    if( !hasClass( elements,cName ) ){ 
        elements.className == "" ? elements.className += cName : elements.className += " " + cName; 
    } 
}; 

/**
 * 为DOM元素移除类
 * @param {*} elements 
 * @param {*} cName 
 */
function removeClass( elements,cName ){ 
    if( hasClass( elements,cName ) ){ 
        elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
    } 
};

/**
 * 节流函数，通过控制每次事件执行的时间间隔控制短时间多次执行方法
 * @param {function} handle 要执行的方法
 * @param {Date} wait 每次事件执行的时间间隔
 */
function throttle(handle, wait){
    var lastTime = 0;
    return function(){
        var nowTime = new Date().getTime();
        if(nowTime - lastTime > wait){
            handle.apply(this, arguments);
            lastTime = nowTime;
        }
    }
}

/**
 * 防抖函数，通过推迟每次事件执行的时间来减少不必要的查询
 * @param {function} handle 要执行的方法
 * @param {Date} delay 每次事件执行的推迟函数
 */
function debounce(handle, delay){
    var timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            handle.apply(this, arguments);
        }, delay)
    }
}

/**
 * canvas 清除圆形区域
 * @param {*} x 圆心x坐标
 * @param {*} y 圆心y坐标
 * @param {*} r 圆半径
 * @param {*} cxt context
 */
function clearArcFun(x,y,r,cxt){ 
    var stepClear=1;//别忘记这一步  
    clearArc(x,y,r);
    function clearArc(x,y,radius){
       var calcWidth=radius-stepClear;  
       var calcHeight=Math.sqrt(radius*radius-calcWidth*calcWidth);  
 
       var posX=x-calcWidth;  
       var posY=y-calcHeight;  
                       
       var widthX=2*calcWidth;  
       var heightY=2*calcHeight;  
                       
       if(stepClear<=radius){  
          cxt.clearRect(posX,posY,widthX,heightY);  
          stepClear+=1;  
          clearArc(x,y,radius);  
       }  
     }  
 }

export default{
    arrToStringByComma,
    transformDate,
    topBack,
    getDateNumber,
    hasClass,
    addClass,
    removeClass,
    throttle,
    debounce,
    clearArcFun
}