function chunk(arr, size) {
  if (arr.length <= 0) return arr

  const result = []
  let i = 0
  while (i < arr.length) {
    result.push(arr.slice(i, i + size))
    i += size
  }

  return result
}

chunk([1, 9, 6, 3, 2], 3) // [[1,9,6],[3,2]]
