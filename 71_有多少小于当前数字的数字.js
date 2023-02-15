var smallerNumbersThanCurrent = function (nums) {
  let newArr = []
  let len = nums.length
  for (let i = 0; i < len; i++) {
    let num = nums.reduce((r, k) => {
      if (nums[i] > k) {
        return r + 1
      }
      return r
    }, 0)

    newArr[i] = num
  }
  return newArr
};


console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));