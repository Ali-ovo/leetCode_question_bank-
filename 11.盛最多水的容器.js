/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left)
    max = Math.max(max, area)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  
  return max
}
// @lc code=end

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
// maxArea([1,1])
