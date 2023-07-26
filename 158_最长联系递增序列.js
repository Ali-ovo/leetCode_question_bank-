function findLengthOfLCIS(nums) {
  const n = nums.length
  if (!n) return
  let maxLen = 0
  let start = 0
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) {
      start = i
    }
    maxLen = Math.max(maxLen, i - start + 1)
  }
  return maxLen
}
findLengthOfLCIS([1, 3, 5, 4, 7]) // 3
