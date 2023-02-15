var sortArrayByParity = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item % 2 == 0) {
      arr.unshift(item)
    } else {
      arr.push(item)
    }

  }

  return arr
};

console.log(sortArrayByParity([3, 1, 2, 4]));