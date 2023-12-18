/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let len = nums.length
  let left = 0
  let right = len - 1

  while (left < right) {
    let mid = (left + right) >>> 1
    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}
// @lc code=end

findPeakElement([1, 2, 3, 1])
