/**
 * 算法每周一题39 题-单词拆分
 * 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false

提示：  动态规划
http://box.hp.guahao-inc.com/typescript/198
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let answer = false;
  const allZero = function(n) {
    let zero = true;
    n.split('').map(item => {
      if(+item !== 0) {
        zero =false;
      }
    })
    return zero;
  }
  const sliceS = function (n) {
    // var reg = /^0+$/;
    console.log('n',n)
    if (wordDict.indexOf(n) !== -1 || allZero(n)) {
     answer = true;
     return;
    } else {
     // 拆分这个sliceS
     for (let i=0;i<wordDict.length;i++) {
      const indexN = n.indexOf(wordDict[i]);
      // console.log('22', wordDict[i], indexN);
      if (indexN !== -1) {
      // console.log('1');
       const remain = n.slice(0, indexN)+"0" +n.slice(indexN+wordDict[i].length, n.length)
      //  console.log('裁减后', remain);
       sliceS(remain);
      }
     }
    }
  };
  sliceS(s);
  return answer;
};

// console.log('true', wordBreak('leetcode', ["leet", "code"]))
// console.log('true', wordBreak('applepenapple', ["apple", "pen"]))
// console.log('true', wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]))
// console.log('true', wordBreak('bb', ["a","b","bbb"]))
console.log('false', wordBreak('ccbb', ["cb","bc","bbb"]))