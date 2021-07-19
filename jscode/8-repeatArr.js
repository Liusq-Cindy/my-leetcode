// 数组去重，实现方式
const arr = [1,1,2,2,3,4,5,1,2,3]

// 方案一，Set
function repeatArr(arr) {
 let newset = new Set(arr);
 return Array.from(newset);
}

// 方案二、hash表
function repeatArr(arr) {
 let obj = {};
 for(let i=0;i<arr.length;i++) {
   obj[arr[i]] += 1
 }
 const objAns = Object.keysOf(obj);
 return objAns.map(item => parseInt(item));
}

// 方案三，数组循环
function repeatArr(arr) {
 let newArr = [];
 arr.forEach(item => {
  if(!newArr.includes(item)) {
   newArr.push(item)
  }
 })
 return newArr;
}