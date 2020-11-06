/**
 * 算法每周一题第26题-重排字符串
 * 
 * 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

若可行，输出任意可行的结果。若不可行，返回空字符串。

示例 1:

输入: S = "aab"
输出: "aba"
示例 2:

输入: S = "aaab"
输出: ""

注意:
S 只包含小写字母并且长度在[1, 500]区间内。

提示： 利用贪心逻辑和优先队列解题, 只要相邻的不同既可，输出答案不唯一

http://box.hp.guahao-inc.com/typescript/142

 */

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
 let stringObj = {};
 for (let i = 0; i< S.length; i++) {
  let keyO = S.charAt(i);
  if (stringObj[keyO]) {
   stringObj[keyO] += 1;
  } else {
   stringObj[keyO] = 1;
  }
 }
 
 // 遍历对象的键值
 for (key in stringObj) {
   if (stringObj[key] > S.length/2) {
    return ''
   }
 }
 // 获取除n外的最大的键值
 const getMaxSri = function(obj, n) {
  let keySri = '';let num = 0;
  for (key in obj) {
   if (obj[key] > num && key !== n) {
    num = obj[key];
    keySri = key;
   }
  }
  return keySri;
 };
 // 排列字符串如{a: 5,b:4,c:3}，先取大的，再取小的
 let newStri = [];
 let bigZ = getMaxSri(stringObj, '');
 while (stringObj[bigZ] > 0) {
   // 获取当前数值最大的健值
   newStri.push(bigZ);
   stringObj[bigZ] -= 1;
   // 排除该最大键值所在，从其他的键值中获取最大的一个,更新当前这个bigZ
   let newbigZ = getMaxSri(stringObj, bigZ);
   bigZ = newbigZ;
 }
 return newStri.join('')
};


console.log(
   reorganizeString('aadvccaacc'),
   'acacacadcv'
)

console.log(
   reorganizeString('aadvccaaccaaaaaaaaaaaaa'),
   ''
)

console.log(
   reorganizeString('aabafaafqfarfqqfafgagfasgsf'),
   'afafafagagagaqaqaqfsfsfbfrf'
)