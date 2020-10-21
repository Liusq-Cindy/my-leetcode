/**
 *  
 *  算法每周一题-丑数
 *  请你帮忙设计一个程序，用来找出第 n 个丑数。
    丑数是可以被 a 或 b 或 c 整除的 正整数

    示例 1：
    输入：n = 3, a = 2, b = 3, c = 5
    输出：4
    示例 2：
    输入：n = 1000000000, a = 2, b = 217983653, c = 336916467
    输出：1999999984
    解释：丑数序列为 2, 3, 4, 5, 6, 8, 9, 10... 其中第 3 个是 4。
    提示：
    1 <= n, a, b, c <= 10^9
    1 <= a * b * c <= 10^18
    本题结果在 [1, 2 * 10^9] 的范围内
 */

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
 let real = 0, s = 0;
  for(let i=1; i<= Math.min(a,b,c)*n; i++) {
   if (i % a === 0 || i % b === 0 || i % c === 0) {
    real = i
    s++
   }
   if (s === n) {
    break;
   }
  }
  return real
};

console.log('nthUglyNumber', nthUglyNumber(5,3,6,5))
// console.log('nthUglyNumber', nthUglyNumber(1000000000,2,217983653,336916467))

// http://box.hp.guahao-inc.com/typescript/137