/* 算法第三十题，拼写单词
给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

注意：每次拼写（指拼写词汇表中的一个单词）时，chars 中的每个字母都只能用一次。

返回词汇表 words 中你掌握的所有单词的 长度之和。



示例 1：

a:3
b:1
c:5

a:1
b:0
c:3

b[a] >0
b[a]--

输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6
解释： 
可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
示例 2：

输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
输出：10
解释：
可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。

*/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
// 方法一： 两次循环，对每个单词去字符串中寻找，找到了就去掉改字符串
var countCharacters = function(words, chars) {
  let wordsArray = [];
  for (let i = 0; i< words.length; i++) {
   let newChars = chars;
   let checkWords = false;
   for (let j=0; j< words[i].length; j++) {
    if (newChars.indexOf(words[i][j]) > -1) {
     newChars = newChars.replace(words[i][j], '')
     checkWords = true
    } else {
     checkWords = false
     break;
    }
   }
   if (checkWords) {
    wordsArray.push(words[i]);
   }
  }
  return wordsArray.join('').length;
};
// console.log('6', countCharacters(["cat","bt","hat","tree"], "atach"))
// console.log('10', countCharacters(["hello","world","leetcode"], "welldonehoneyr"))

// 方法二，字符串排序，然后正则识别是否包含对应单词,如识别aaabbbccc中是否包含ac
var countCharacters1 = function(words, chars) {
 let wordsLong = 0;
 for (let i = 0; i< words.length; i++) {
  let newChars = chars.split('').sort().join('');
  // 正则匹配是否包含单词所需字母，newChars.indexOf(words[i]
  let realW = ''
  words[i].split('').sort().map((item) => {
   realW += item + '+\\w*'
  })
  let reg = new RegExp(realW)

  if (reg.test(newChars)) {
   wordsLong += words[i].length
  }
 }
 return wordsLong;
};
console.log('6', countCharacters1(["cat","bt","hat","tree"], "atacchh"))
console.log('10', countCharacters1(["hello","world","leetcode"], "welldonehoneyr"))