// 手写一个简单的防抖函数

// 理解：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
// 通常应用在，如搜索框输入搜索防抖
// 用于搜索框和滚动的监听事件处理，如果没有防抖，那么每输入一个字或者滚动屏幕，都会触发事件，甚至一秒钟触发几十次，性能就会浪费。

// 1、非立即执行版：一开始不触发delay秒后才会执行
function debounce(func, delay) {
  let timer = null;
  return function() {
   clearTimeout(timer);
   timer = setTimeout(() => {
    func.apply(this, arguments)
    // 具体分析可见：https://blog.csdn.net/weixin_44494811/article/details/103486637
   }, delay)
  }
}
 
// 2、立即执行版：一开始就触发，后面再触发不执行，delay秒后可以再触发
function debounce (func, delay) {
  let timer;
  return function(){
    clearTimeout(timer);
    let callNow = !timer
    timer = setTimeout(() => {
      timer = null;
    }, delay)
    if (callNow) {
      func.apply(this, arguments);
    }
  }
}

// 3、综合版
// 合成版
/**
   * @desc 函数防抖
   * @param func 目标函数
   * @param wait 延迟执行毫秒数
   * @param immediate true - 立即执行， false - 延迟执行
   */
  function debounce(func, wait, immediate) {
    let timer;
    return function() {
      let context = this,
          args = arguments;
      // 根据immediate参数配置是否立即执行
      if (timer) clearTimeout(timer);
      if (immediate) {
        let callNow = !timer;
        timer = setTimeout(() => {
          timer = null;
        }, wait);
        if (callNow) func.apply(context, args);
      } else {
        timer  = setTimeout(() => {
          func.apply
        }, wait)
      }
    }
}