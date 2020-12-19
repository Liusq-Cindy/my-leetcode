// 节流(throttle)
// 指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次... 。节流如字面意思，会稀释函数的执行频率。
// 以下介绍一个简单的版本

function throttle(fn,wait){
 // 首先获取调用throttle时的一个时间戳作为触发时时间，实现用闭包保存 pre 变量。
 var pre = Date.now();
 return function(){
     var context = this;
     var args = arguments;
     var now = Date.now(); 
     if( now - pre >= wait){ // 当当前时间-出发时时间大于等待时间后，触发fn函数执行
         fn.apply(context,args);
         pre = Date.now(); // 更新触发时间
     } else{
      //让方法在脱离事件后也能执行一次
        timeout = setTimeout(function(){
           fn.apply(context, args) 
        }, wait);
     }
  }
}
// 由此可以实现，在wait时间范围内，只执行一次，下一个时间窗内，会再次触发。调用方式：比如在2秒后调用handleSth()方法： throttle(handleSth, 2000) 
