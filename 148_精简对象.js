function compactObject(obj) {
  if (obj == null || typeof obj !== 'object') {
    return obj
  }

  // 数组的话可以直接枚举
  if (Array.isArray(obj)) {
    const res = []
    for (let it of obj) {
      const val = compactObject(it)
      if (val) res.push(val)
    }
    return res
  }

  // 对象需要把key拿出来
  const res = {}
  for (let key in obj) {
    const val = compactObject(obj[key])
    if (val) res[key] = val
  }
  return res
}

const obj = [null, 0, 5, [0], [false, 16]] // [5,[], [16]]
const obj2 = { a: null, b: [false, 1] } // {"b": [1]}
compactObject(obj)
