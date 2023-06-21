// A 少于两个
// L 连续少于三个
function checkRecord(s = '') {
  let absents = 0,
    lates = 0
  const n = s.length
  for (let i = 0; i < n; i++) {
    const c = s[i]
    if (c === 'A') {
      absents++
      if (absents >= 2) {
        return false
      }
    }
    if (c === 'L') {
      lates++
      if (lates >= 3) {
        return false
      }
    } else {
      lates = 0
    }
  }
  return true
}

// checkRecord('PPALLL') // false
