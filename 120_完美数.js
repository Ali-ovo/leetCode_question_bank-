function checkPerfectNumber(num) {
  if (num <= 1) return false
  let sum = 1
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i
      if (i * i !== num) {
        sum += num / i
      }
    }
  }

  return sum === num
}

checkPerfectNumber(28) // true 28 = 1 + 2 + 4 + 7 + 14
