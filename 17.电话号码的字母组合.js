/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const res = []
  const dfs = (curStr, i) => {
    // curStr是当前字符串，i是扫描的指针
    if (i > digits.length - 1) {
      // 指针越界
      res.push(curStr) // 将解推入res
      return // 结束当前递归分支
    }
    const letters = map[digits[i]] // 当前数字对应有哪些字
    for (const letter of letters) {
      dfs(curStr + letter, i + 1) // 递归
    }
  }
  dfs('', 0) // 递归的入口，初始字符串为''，指针为0
  return res
}
// @lc code=end

