var isPowerOfThree = function (n) {
  if (n == 1) return true
  while (n >= 3) {
    n /= 3;
  }

  return n == 1
};

console.log(isPowerOfThree(9));