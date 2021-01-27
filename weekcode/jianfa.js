/**
 * 算法第 38 题 将 x 减到 0 的最小操作数
 * 
给你一个整数数组 nums 和一个整数 x 。每一次操作时，
你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。
请注意，需要 修改 数组以供接下来的操作使用。
如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。

 

示例 1：

输入：nums = [1,1,4,2,3], x = 5
输出：2
解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
示例 2：

输入：nums = [5,6,7,8,9], x = 4
输出：-1
示例 3：

输入：nums = [3,2,20,1,1,3], x = 10
输出：5
解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。
 

提示：

1 <= nums.length <= 105
1 <= nums[i] <= 104
1 <= x <= 109
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
// var minOperations = function(nums, x) {
//  let ans = 0;
//  let record = 'left';
//  while(x > 0) {
//   if (nums[0] > nums[nums.length-1]) {
//    x -= nums[0]
//    x.shift();
//    ans++
//    record = 'left';
//   } else {
//    x -= nums[nums.length-1]
//    x.pop();
//    ans++;
//    record = 'right';
//   }
//  }
//  if (x === 0) {
//   return ans
//  } else if (x < 0){
//   if(record === 'left') {
//    ans --;
//    // x.
//   }
//  }
// };

// 33441  33441
var minOperations = function(nums, x) {
 let newArr = nums.concat(nums);
 let ansArr = [];
 let leftAll = 0;
 let rightAll = 0;
 let left = 0;
 let right = 0;
 let maxLength = 0;
 while(leftAll< x) {
  leftAll += newArr[nums.length-1-left]
  left++
 }
 while(rightAll< x) {
  rightAll += newArr[nums.length+right]
  right++
 }
 console.log('left取出来', left, leftAll)
 console.log('right取出来', right, rightAll)
 maxLength = nums.length;
 ansArr = newArr.slice(nums.length-left, nums.length).concat(newArr.slice(nums.length, nums.length+right));
 console.log('拼接', ansArr, maxLength) // 41  33,求5
 let ans = [];
 let answer = 0;
 // i表示窗口宽度，j表示起始位置，只是必须包含中间数，则可以将窗口从最后往前推  
 // 比如拼接后数组33441 33441  从1位窗口开始，取3；2位窗口，可取33，13，41；三位窗口，可取，334，133，413，441
 for (let i =1;i<=maxLength;i++) {
  // 移窗去查找
  for (let j=0; j<=i; j++) {
   // console.log('继续',j)
   ans = ansArr.slice(left-j, left+i-j);
   let he = 0;
   ans.forEach((item) => {
    he+= item
   });
   console.log('结果', ans, he);
   if (he === x) {
    answer = i;
    return i;
   }
  }
 }
  return -1
};

// console.log('minOperations', minOperations([3,3,4,4,1], 5))
// console.log('minOperations', minOperations([5,6,7,8,9], 4))
// console.log('minOperations', minOperations([3,2,20,1,1,3], 10))


// 修正版

var minOperations1 = function(nums, x) {
 let newArr = nums.concat(nums);
 let sliceArr = [];
 // i表示窗口宽度，j表示起始位置，只是必须包含中间数，则可以将窗口从最后往前推  
 // 比如拼接后数组33441 33441  从1位窗口开始，取3；2位窗口，可取33，13，41；三位窗口，可取，334，133，413，441
 for (let i =1;i<=nums.length;i++) {
  // 移窗去查找
  for (let j=0; j<=i; j++) {
   sliceArr = newArr.slice(nums.length-j, nums.length+i-j);
   let answer = 0;
   sliceArr.forEach((item) => {
    answer+= item
   });
   // console.log('截取的数组', sliceArr, answer);
   if (answer === x) {
    return i;
   }
  }
 }
  return -1
};

console.log('minOperations', minOperations1([3,3,4,4,1], 5))
console.log('minOperations', minOperations1([5,6,7,8,9], 4))
console.log('minOperations', minOperations1([3,2,20,1,1,3], 10))

