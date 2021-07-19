// 拉平数组，实现方式

// 方案一
const ans = arr.flat(Infinity);

// 方案二 递归
function flatArr(arr1) {
 let res = [];
  function flatOne(arr) {
   for(let i=0; i<arr.length; i++) {
    if (arr[i] instanceof Array  === false) {
     res.push(arr[i]);
    } else{
     flatOne(arr[i]);
    }
   }
  };
  flatOne(arr1);
  return res;
}
// 方案三 正则 [1,[2,[3,[4,5,[6]]]]]
function flatArr(arr1) {
 const reg = /'\[|\]'/g;
 let Stin = arr1.toString().replace(reg, '').split(',');
 return Stin.map(item => +item)
}