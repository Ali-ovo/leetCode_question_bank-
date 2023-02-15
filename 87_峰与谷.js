var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b);

  const ans = [...nums];
  let i = 0, left = 0, right = nums.length - 1, flag = 1;
  while (i < nums.length) {
    nums[i++] = ans[flag++ % 2 === 0 ? left++ : right--];
  }

};

