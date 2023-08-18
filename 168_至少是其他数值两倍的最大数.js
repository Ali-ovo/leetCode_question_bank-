function dominantIndex(nums) {
  if (nums.length === 1) return 0
  let max = Math.max(...nums)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > max && nums[i] !== max) {
      return -1
    }
  }

  return nums.indexOf(max)
}

console.log(dominantIndex([3, 6, 1, 0])) // 1
console.log(dominantIndex([1, 2, 3, 4])) // -1
