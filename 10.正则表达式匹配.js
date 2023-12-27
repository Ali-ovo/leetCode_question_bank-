/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (string, pattern) {
  // 当模式为空时提前返回
  if (!pattern) {
    // 当字符串和模式都为空时返回 true
    // 当字符串包含字符但模式为空时返回 false
    return !string
  }

  // 当字符串有字符时，检查字符串和模式的当前字符是否匹配
  const hasFirstCharMatch = Boolean(string) && (pattern[0] === '.' || pattern[0] === string[0])

  // 跟踪模式中下一个字符是否为 *
  if (pattern[1] === '*') {
    // 如果下一个模式匹配（* 之后）与当前字符串匹配，则继续执行（s, p+2）。这是因为当前的模式可能会被跳过。
    // 否则检查 hasFirstCharMatch。这是因为如果我们想继续当前的模式，我们必须确保当前的模式字符匹配字符
    // 如果 hasFirstCharMatch 为 true，则使用下一个字符和当前模式进行递归（s+1, p）。这是因为当前字符匹配模式字符。
    return isMatch(string, pattern.slice(2)) || (hasFirstCharMatch && isMatch(string.slice(1), pattern))
  }

  // 现在我们可以确定需要执行两个简单的操作
  // 检查当前的模式和字符串字符
  // 如果是，那么可以继续下一个字符串和模式字符（s+1, p+1）
  return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false
}
// @lc code=end

isMatch('aab', 'c*a*b')
