function reduce(nums, fn, init) {
  if (!nums.length) return init
  let res = init
  nums.forEach((item) => {
    res = fn(res, item)
  })

  return res
}

reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
