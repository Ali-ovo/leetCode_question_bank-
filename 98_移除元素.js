var removeElement = function (nums, val) {
  let len = 0
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) nums[len++] = nums[i]
  }
  return len
};

// [0,1,4,0,3]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2],2));