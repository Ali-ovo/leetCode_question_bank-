function findRelativeRanks(score) {
  let arr = [...score].sort((a, b) => b - a)
  let map = new Map()

  arr.forEach((item, index) => {
    map.set(item, index + 1)
  })

  console.log(arr)
  console.log(map)
  return score.map((item) => {
    if (map.get(item) === 1) {
      return 'Gold Medal'
    } else if (map.get(item) === 2) {
      return 'Silver Medal'
    } else if (map.get(item) === 3) {
      return 'Bronze Medal'
    } else {
      return map.get(item) + ''
    }
  })
}

findRelativeRanks([10, 3, 8, 9, 4]) // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
