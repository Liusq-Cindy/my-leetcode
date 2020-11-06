/**
 * 算法第二十七题-字符串相乘
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 还是用了转为字符串，且数字过大会超时
var multiply = function(num1, num2) {
 let ans = 0;
  for (let i =0; i< +num2; i++) {
   ans += +num1
  }
 return ans;
};
// 模拟手算乘法, 每一位相乘补零，最后相加
var multiply1 = function(num1, num2) {
 // 大数相加函数
 const bigNumPlus = function(n1,n2) {
  if (n2.length > n1.length) {
   [n1,n2] = [n2,n1]
  }
  let a = new Array(n1.length).fill('0');
  n2 = new Array(n1.length - n2.length).fill('0').concat(n2.split(''))
  n1 = n1.split('')
  let plusNum = 0;
  for (let i=n1.length - 1; i>=0; i--) {
   a[i] = (+n1[i] + +n2[i] + plusNum)%10
   plusNum = parseInt((+n1[i] + +n2[i] + plusNum)/10)
  }
  if (plusNum > 0) {
   a.unshift(plusNum)
  }
  return a.join('')
 }
 // 手算乘法
 let arrAns = [];
 // 遍历num2各位
 for (let  i=0; i<num2.length; i++) {
  let numsOf0 = '';
  for (let j=0; j< i; j++) {
   numsOf0 += '0'
  }
  // 求num2各位数与num1的乘积，遍历num1
  // curentAns = (+num1 * check2).toString() + numsOf0 // 直接相乘大数会溢出，所以要下面这个方法去求
  const check2 = +num2[num2.length - 1 - i]
  let nums1plus = [];
  for (let k=0; k<num1.length; k++) {
   let nums1of0 = ''
   nums1of0 = new Array(num1.length - 1 - k ).fill('0').join('')
   let current = (+num1[k] * check2).toString() + nums1of0
   nums1plus.push(current)
  }
  let curentAns = '0';
  // 各位相加
  nums1plus.map(item => {
   curentAns = bigNumPlus(curentAns, item) // 大数相加会有问题，超出2^52限制了,需要调用字符串进位方法
  })
  curentAns = curentAns.toString() + numsOf0 // 补0


  arrAns.push(curentAns);
 }

 let answer = '0';
 arrAns.map(item => {
  answer = bigNumPlus(answer, item) // 大数相加会有问题，超出2^52限制了,需要调用字符串进位方法
 })
 answer = answer.toString().replace(/\b(0+)/gi,'') || '0' // 结果去除字符串前面的0
 return answer.toString()
}

console.log(
    multiply1('2', '3'), 
)

console.log(
    multiply('123', '456'), '56088'
)

console.log(
    multiply1('21111112343332', '3111234567777755'), '65681622486814163537832179660'
)