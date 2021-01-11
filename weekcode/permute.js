

var permute = function(nums) {
 let ansArr = [];
 let newNums = nums.concat();
 for (let i = 0; i< nums.length; i++) {
   let subArr = [];
   subArr.push(newNums[0]);
   this.pailie()
   // 后续的字母排列然后
   ansArr.push(subArr);
   newNums.slice(i,i+1);
 }
 return ansArr;
};
var permute = function(nums) {
 let arrResult = [];
 const func = function(arr,temp){
   if(arr.length ==0){
       arrResult.push(temp)
   }
   for(let i=0; i<arr.length; i++){
       let newArr = arr.slice(0,i).concat(arr.slice(i+1)); // 去掉i,获取新数组，如123，去掉1，得到23，
       func(newArr,temp.concat(arr[i])) // 对23，1再次调用func,得到，2，31，然后得到0，231，将temp放进去
   }
 }
 func(nums,[]);
 return arrResult;
}

console.log('ansArr', permute([1,2,3]));