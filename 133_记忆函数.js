function memoize(fn) {
  const map = new Map(),
    hash = new Map()
  let id = 0
  return function () {
    const key = Array.from(arguments)
      .map((arg) => {
        if (!hash.has(arg)) hash.set(arg, id++)
        return hash.get(arg)
      })
      .join('-')
    if (!map.has(key)) map.set(key, fn.apply(null, arguments))
    return map.get(key)
  }
}

let callCount = 0
const memoizedFn = memoize(function (a, b) {
  callCount += 1
  return { ...a, ...b }
})
memoizedFn({}, {})
memoizedFn({}, {})
memoizedFn({}, {})
console.log(callCount) //3

// memoizedFn(2, 3) // 5
// memoizedFn(2, 3) // 5
// memoizedFn(3, 3) // 5
// console.log(callCount) // 2
