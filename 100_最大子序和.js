var maxSubArray = function (nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    // console.log("pre  " + pre);
    maxAns = Math.max(maxAns, pre);
    console.log("maxAns " + maxAns);

  });
  return maxAns;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));