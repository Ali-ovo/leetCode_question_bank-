/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const cnts = new Map(),
    ans = new Array(),
    n = words.length,
    step = words[0].length
  for (const word of words) {
    if (cnts.has(word)) {
      cnts.set(word, cnts.get(word) + 1)
    } else {
      cnts.set(word, 1)
    }
  }

  
  out: for (let i = 0; i <= s.length - step * n; i++) {
    const curCnts = new Map()
    for (let j = 0; j < n; j++) {
      const subStr = s.substr(i + j * step, step)
      if (!cnts.has(subStr)) {
        continue out
      }
      if (curCnts.has(subStr)) {
        curCnts.set(subStr, curCnts.get(subStr) + 1)
        if (curCnts.get(subStr) > cnts.get(subStr)) {
          continue out
        }
      } else {
        curCnts.set(subStr, 1)
      }
    }
    ans.push(i)
  }
  return ans
}

findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])
// @lc code=end
