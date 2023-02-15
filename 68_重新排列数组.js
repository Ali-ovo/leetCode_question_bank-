var shuffle = function (nums, n) {
  let len = nums.length / 2
  let arr = []
  for (let i = 0; i < len; i++) {
    arr.push(nums[i])
    arr.push(nums[len + i])
  }

  return arr
};

console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));