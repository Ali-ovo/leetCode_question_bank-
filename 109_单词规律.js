function wordPattern(pattern, s) {
  let strArr = s.split(' ')
  if (strArr.length !== pattern.length) return false
  for (let i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) !== strArr.indexOf(strArr[i])) {
      return false
    }
  }

  return true
}

wordPattern('abba', 'dog cat cat dog') // true
