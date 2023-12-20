/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0
  while (x !== 0) {
    res = res * 10 + (x % 10)
    x = (x / 10) | 0
  }


  return (res | 0) === res ? res : 0
}
// @lc code=end
