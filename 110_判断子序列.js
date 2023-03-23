function isSubsequence(s, t) {
  let left = 0,
    right = 0
  let sLen = s.length
  let rLen = t.length

  while (left < sLen) {
    if (right > rLen) {
      break
    }
    if (s[left] === t[right]) {
      left++
      right++
    } else {
      right++
      continue
    }
  }

  return left === sLen
}

console.log(isSubsequence('b', 'c'))
