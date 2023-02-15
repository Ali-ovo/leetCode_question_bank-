var singleNumber = function (nums) {
  return nums.reduce((a, b) => {

    return a ^ b
  })
};

// 异或方法 1 ^ 1 = 0   2 ^ 2 = 0  0 ^ 4 = 4
console.log(singleNumber([4, 1, 2, 1, 2]));