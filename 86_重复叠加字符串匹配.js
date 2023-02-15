var repeatedStringMatch = function(a, b) {
  let s = a, count = 1, len = a.length * 2 + b.length // b 不会为空，从 1 开始就行
  // console.log(len);
  while (s.length <= len) {
    if (s.indexOf(b) !== -1) {
      return count
    }
    s += a
    ++count
  }
  return -1
};