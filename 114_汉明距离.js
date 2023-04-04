function hammingDistance(x, y) {
  let s = x ^ y,
    ret = 0
  while (s != 0) {
    ret += s & 1
    s >>= 1
  }
  return ret
}

hammingDistance(1, 4)
