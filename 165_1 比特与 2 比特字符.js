function isOneBitCharacter(bits) {
  let i = 0,
    n = bits.length
  while (i < n - 1) {
    i += bits[i] + 1
  }
  return i === n - 1
}

isOneBitCharacter([1, 0, 0]) // true
isOneBitCharacter([1, 1, 1, 0]) // false
