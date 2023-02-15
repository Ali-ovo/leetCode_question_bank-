var moveZeroes = function (nums) {
  return nums.sort((a, b) => {
    return (a === 0) ? (b !== 0 ? 1 : 0) : (b === 0 ? -1 : 0)
  })
};
console.log(moveZeroes([0, 1, 0, 3, 12]));