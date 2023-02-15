var countPrimes = function (n) {
  const d = Array(n).fill(true)
  let count = 0
  for (let i = 2; i < n; ++i) {
    if (d[i]) {
      ++count
      for (let j = i * i; j < n; j += i) {
        d[j] = false
      }
    }
  }
  return count

};


console.log(countPrimes(10));