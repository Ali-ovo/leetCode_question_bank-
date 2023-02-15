var findDisappearedNumbers = function (nums) {
  let set = new Set()
  for(let i = 0; i < nums.length; i++) {
          set.add(nums[i])
  }
  console.log(...set);
  for (let j = 1; j <= nums.length; j++) {
      if(set.has(j)) set.delete(j)
      else set.add(j)
  }
  return [...set]
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));