/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 一次迭代
  let rows = new Array(9).fill(0).map(() => new Set())
  let cols = new Array(9).fill(0).map(() => new Set())
  let boxs = new Array(9).fill(0).map(() => new Set())
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j]
      if (num === '.') continue
      if (rows[i].has(num) || cols[j].has(num) || boxs[3 * Math.floor(i / 3) + Math.floor(j / 3)].has(num)) {
        return false
      }
      rows[i].add(num)
      cols[j].add(num)
      boxs[3 * Math.floor(i / 3) + Math.floor(j / 3)].add(num)
    }
  }
  return true
}
// @lc code=end

isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
])
