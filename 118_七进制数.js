var convertToBase7 = function (num) {
  var absNum = Math.abs(num)
  var res = ''
  while (absNum >= 7) {
    res = (absNum % 7) + res
    absNum = Math.floor(absNum / 7)
  }
  res = absNum + res
  return num >= 0 ? res : '-' + res
}

console.log(convertToBase7(100))
