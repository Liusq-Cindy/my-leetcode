/**
 * 算法36 题-全排列
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

 // 可以考虑用深度优先搜索+回溯方式去实现

示例:

输入: [1,2,3]
输出:
[
  [1,2,3], [1,2,3]
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let ansArr = [];
  const getNum = function(arr, temp) {
    if (arr.length === 0) {
      ansArr.push(temp)
    }
    for (let i=0; i<arr.length; i++) {
      let cutArr = temp.concat(arr[i]);
      let subArr = arr.slice(0,i).concat(arr.slice(i+1));
      // let subArr = arr.splice(i, 1);

      getNum(subArr,cutArr)
    }
  }
  getNum(nums,[]);
  return ansArr;
};

// console.log('ansArr', permute([1,2,3]));

// http://box.hp.guahao-inc.com/typescript/188

var arr = [1, 2, 3];
var permute1 = function(nums) {
  var allarr = [];
  // 临时变量，存数组
  var temp = [];
  function getAllList(arr) {
      for (var i = 0; i < arr.length; i++) {
          // 插入第i个值
          temp.push(arr[i]);
          // 复制数组
          var copy = arr.slice();
          // 删除复制数组中的第i个值，用于递归
          copy.splice(i, 1);
          if(copy.length === 0) {
              allarr= [...allarr, [...temp]]
          }else {
            getAllList(copy);
          }
          console.log('删除最后一个元素temp', temp.pop());
          // 递归完了之后删除最后一个元素，保证下一次插入的时候没有上一次的元素
          // temp.pop();
      }
  }
  getAllList(nums);
  return allarr;
}

console.log('getAllList', permute1([1,2,3]));
