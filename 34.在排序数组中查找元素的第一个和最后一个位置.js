/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  let res = [-1, -1]

  while (left <= right) {
    const mid = (left + right) >>> 1
    if (nums[mid] === target) {
      let l = mid,
        r = mid
      while (nums[l] === target) {
        l--
      }
      while (nums[r] === target) {
        r++
      }
      res = [l + 1, r - 1]
      break
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }


  return res
}
// @lc code=end
