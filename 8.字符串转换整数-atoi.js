/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const match = s.trim().match(/^(-|\+)?\d+/);
  if (!match) return 0;
  const num = Number(match[0]);
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  return Math.max(Math.min(num, max), min);
};
// @lc code=end



// myAtoi('   -42');
myAtoi('4193 with words');

