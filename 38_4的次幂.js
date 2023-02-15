var isPowerOfThree = function (n) {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};

console.log(isPowerOfThree(16));