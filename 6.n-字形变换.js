/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1) return s

  const len = Math.min(s.length, numRows)
  const rows = []
  for (let i = 0; i < len; i++) rows[i] = ''

  let loc = 0
  let isDown = false

  for (const code of s) {
    rows[loc] += code
    if (loc === 0 || loc === numRows - 1) {
      isDown = !isDown
    }

    loc += isDown ? 1 : -1
  }

  let ans = ''
  for (const row of rows) ans += row
  return ans
}
// @lc code=end
