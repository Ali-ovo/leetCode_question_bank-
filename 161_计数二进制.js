function countBinarySubstrings(s) {
  // pre 前一个数字连续出现的次数，cur 当前数字连续出现的次数，result 结果子串个数
  let pre = 0,
    cur = 1,
    result = 0
  for (let i = 0, len = s.length - 1; i < len; i++) {
    // 判断当前数字是否与后一个数字相同
    if (s[i] === s[i + 1]) {
      // 相同，则当前数字出现的次数cur加1
      cur++
    } else {
      // 不同，则当前数字事实上变成了前一个数字，当前数字的次数重置为1
      pre = cur
      cur = 1
    }
    if (pre >= cur) {
      // 前一个数字出现的次数 >= 后一个数字出现的次数，则一定包含满足条件的子串
      result++
    }
  }
  return result
}

countBinarySubstrings('00110011') // 6
countBinarySubstrings('10101') // 4
