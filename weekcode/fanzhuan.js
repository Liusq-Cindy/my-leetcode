/**
算法第 31 题-翻转对
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 
 * 我们就将 (i, j) 称作一个重要翻转对。
 * 你需要返回给定数组中的重要翻转对的数量。
示例 1:

输入: [1,3,2,3,1]
输出: 2
示例 2:

输入: [2,4,3,5,1]
输出: 3

提示： 其实就是求左侧出现了的比右侧的2倍大的数字的个数
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：两次循环遍历，对比数组及两倍数的数组
var reversePairs1 = function(nums) {
  let dbNums = nums.map(item => item*2);
  let res = 0;
  for (let i=0; i<nums.length; i++) {
   for (let j=i; j<dbNums.length; j++) {
    if (nums[i] > dbNums[j]) {
     res++;
    }
   }
  }
  return res;
};

console.log('2', reversePairs1([1,3,2,3,1]))
console.log('3', reversePairs1([2,4,3,5,1]))

// http://box.hp.guahao-inc.com/typescript/170
// 输入: [1,3,2,3,1]
//      [2,6,4,6,2]
// 输出: 2