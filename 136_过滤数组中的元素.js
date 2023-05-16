function filter(arr = [], fn) {
  if (!arr) return []
  return arr.reduce((pre, item, i) => {
    if (fn(item, i)) {
      return pre.concat(item)
    }
    return pre
  }, [])
}

const fn = function greaterThan10(n) {
  return n > 10
}
const arr = [0, 10, 20, 30]

const newArray = filter(arr, fn) // [20, 30]
