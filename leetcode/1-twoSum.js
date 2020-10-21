/*
1.两数之和  leetcode 题号：1
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

// 方式一，两次循环嵌套
var twoSum = function(nums, target) {
  for (let i=0;i<nums.length;i++) {
      for (let j=0;j<nums.length;j++) {
        console.log('i',i);
          if (nums[i] + nums[j] === target && (i !== j)) {
              return [i,j];
          }
      }
  }
};

console.log('两数之和', twoSum([2,7,11,15],9))

// 方式二，既定查找,寻找他的差值是否存在 其实也是两次循环
var twoSum2 = function(nums, target) {
  let newNums = nums.map(item => target-item);
  for (let i=0;i<nums.length;i++) {
    if (nums.indexOf(newNums[i]) !== -1) {
      return [i, nums.indexOf(newNums[i])];
    }
  }
};
console.log('两数之和2', twoSum2([2,7,11,15],9))

// LOOK:
// 正解：因为是两数之和，两个数交换对结果没有影响，可以map记录查过的数字和index，在遍历到后一个数字的时候，去记录中查找，这样只需要一次遍历 

var twoSum3 = function(nums, target) {
  let regMap = {}
  for (let i=0;i<nums.length;i++) {
    if (regMap[target - nums[i]] !== undefined) {
      return [i, regMap[target - nums[i]]]
    } else {
      regMap[nums[i]] = i
    }
  }
}
console.log('两数之和3', twoSum3([2,7,11,15],9))
