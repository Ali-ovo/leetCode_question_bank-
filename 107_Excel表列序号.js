function titleToNumber(columnTitle) {
  if (!columnTitle) return 0
  const len = columnTitle.length - 1
  let num = 0
  let multiple = 1
  for (let i = len; i >= 0; i--) {
    const k = columnTitle[i].charCodeAt() - 64
    num += k * multiple
    multiple *= 26
  }

  return num
}

titleToNumber('FXSHRXW')
