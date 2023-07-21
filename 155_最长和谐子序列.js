function findLHS(nums) {
  if (nums.length <= 1) return 0
  nums.sort((a, b) => a - b)
  var begin = 0,
    res = 0

  for (var end = 0; end < nums.length; end++) {
    while (nums[end] - nums[begin] > 1) {
      begin++
    }
    if (nums[end] - nums[begin] == 1) {
      res = Math.max(res, end - begin + 1)
    }
  }
  return res
}

findLHS([1, 3, 2, 2, 5, 2, 3, 7]) // 5  [3,2,2,2,3]
