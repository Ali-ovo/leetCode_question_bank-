var search = function (nums, target) {
  let len = nums.length
  let idx = -1
  for (let i = 0; i < len; i++) {
    if (nums[i] == target) {
      idx = i
    }
  }

  return idx
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));