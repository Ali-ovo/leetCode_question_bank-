/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let max = 0
  let stack = [-1] // 栈底永远是当前有效括号串的起点
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(') {
      stack.push(i) // 入栈
    } else {
      stack.pop() // 出栈
      if (stack.length) {
        // 栈顶元素是上次无法匹配的右括号的下标
        max = Math.max(max, i - stack[stack.length - 1])
      } else {
        // 栈为空，说明当前的右括号无法匹配，将其下标入栈作为新的起点
        stack.push(i)
      }
    }
  }
  return max
}
// @lc code=end

longestValidParentheses(')()())')
