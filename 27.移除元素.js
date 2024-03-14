/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const len = nums.length
  if (len === 0) return 0
  let slow = 0
  for (let fast = 0; fast < len; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }
  }

  return slow
}
// @lc code=end

