var isUgly = function (n) {
  if (n <= 0) return false
  const arr = [2, 3, 5];

  for (const item of arr) {
    while (n % item === 0) {
      n /= item;
    }
  }
  return n == 1
};

console.log(isUgly(14));