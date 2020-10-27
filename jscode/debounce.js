// 手写一个简单的防抖函数
// 理解：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
// 通常应用在，如搜索框输入搜索

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