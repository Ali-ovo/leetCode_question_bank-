function distributeCandies(candyType) {
  const nums = candyType.length / 2;

  const newCandyType = [...new Set(candyType)].length;

  return nums > newCandyType ? newCandyType : nums;
};

distributeCandies([1, 1, 2, 2, 3, 3]); // 3
distributeCandies([6, 6, 6, 6]); // 1