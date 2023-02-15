var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  console.log(nums);
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i];
  }
  return ans;
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));