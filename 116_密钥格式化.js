function licenseKeyFormatting(s, k) {
  if (s.length === 0) return s
  let rightIndex = s.length - 1
  let res = ''
  let count = 0

  while (rightIndex >= 0) {
    if (s[rightIndex] === '-') {
      rightIndex--
      continue
    }

    if (count === k) {
      res = '-' + res
      count = 0
    }

    res = s[rightIndex] + res
    count++
    rightIndex--
  }

  return res.toUpperCase()
}

console.log(licenseKeyFormatting('2-5g-3-J', 2))
