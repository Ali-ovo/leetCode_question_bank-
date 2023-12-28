/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    // 去重
    if (nums[i] === nums[i - 1]) continue
    
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i]
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        // 去重
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }

        // 去重
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }

        left++
        right--
      } else if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      }
    }
  }
  return res
}
// @lc code=end
