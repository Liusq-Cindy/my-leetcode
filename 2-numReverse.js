// 2.整数反转  leetcode 题号：7
// 给出一个 32 位的有符号整数(正反)，你需要将这个整数中每位上的数字进行反转。
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
/**
 * @param {number} x
 * @return {number}
 */

 // 方法一：数字转字符串，然后reverse,最后比较数字范围、拼接符号
var reverse = function(x) {
  let m = x;
  if(x<0) {
      m = x*(-1);
  }
  m = m.toString().split('').reverse();
  let ans = x<0 ? '-' + m.join('').trim() : m.join('').trim()
  if (ans > Math.pow(2,31) -1 || ans< -Math.pow(2,31)) {
    return 0;
  } else {
    return ans;
  }
};
console.log('reverse', reverse(-1234));

