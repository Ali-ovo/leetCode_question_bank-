/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let res = nums[0] + nums[1] + nums[2]

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let l = i + 1,
      r = nums.length - 1
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      if (sum > target) {
        r--
      } else if (sum < target) {
        l++
      } else {
        return res
      }
    }
  }

  return res
}
// @lc code=end
