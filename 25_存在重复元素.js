var containsDuplicate = function (nums) {
  return [...new Set(nums)].length != nums.length
};

console.log(containsDuplicate([1, 2, 3, 1]));