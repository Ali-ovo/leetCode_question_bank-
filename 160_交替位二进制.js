function hasAlternatingBits(n) {
  const str = n.toString(2)
  for (let i = 0; i < str.length - 1; i++) {
    if ((str[i] ^ str[i + 1]) === 0) return false
  }
  return true
}

hasAlternatingBits(3)
