/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let pre = 0,
    after = 0

  while (after < needle.length && pre < haystack.length) {
    if (haystack[after + pre] === needle[after]) {
      after++
    } else {
      pre++
      after = 0
    }
  }

  return after === needle.length ? pre : -1
}
// @lc code=end

// hello ll
