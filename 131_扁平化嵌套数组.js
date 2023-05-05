var flat = function (arr, n = 0) {
  let result = []

  arr.forEach((item) => {
    if (Array.isArray(item) && n > 0) {
      result.push(...flat(item, n - 1))
    } else {
      result.push(item)
    }
  })

  return result
}

flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)
