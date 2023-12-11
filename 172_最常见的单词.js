var mostCommonWord = function (paragraph, banned) {
  let arr = paragraph
    .toLowerCase()
    .split(/[!?',;. ]/)
    .filter((item) => item !== '')
  let map = new Map()

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1)
    } else {
      map.set(arr[i], 1)
    }
  }

  let max = 0
  let res = ''
  for (let [key, value] of map) {
    if (value > max && !banned.includes(key)) {
      max = value
      res = key
    }
  }

  return res
}

mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'])
