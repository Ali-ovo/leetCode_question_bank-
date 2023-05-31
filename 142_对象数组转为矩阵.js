function jsonToMatrix(arr) {
  const result = []

  const set = new Set()
  function resolveHead(o, prefix) {
    for (const k of Object.keys(o)) {
      // 如果是可枚举类型就继续递归
      if (typeof o[k] === 'object' && o[k] !== null) resolveHead(o[k], prefix + k + '.')
      else set.add(prefix + k)
    }
  }
  arr.forEach((o) => resolveHead(o, ''))

  const titles = Array.from(set).sort()
  result.push(titles)
  const map = new Map()
  titles.forEach((v, i) => map.set(v, i))

  function resolveRow(o, prefix, row) {
    for (const k of Object.keys(o)) {
      if (typeof o[k] === 'object' && o[k] !== null) resolveRow(o[k], prefix + k + '.', row)
      else row[map.get(prefix + k)] = o[k]
    }
  }

  arr.forEach((o) => {
    const row = new Array(map.size).fill('')
    resolveRow(o, '', row)
    result.push(row)
  })

  return result
}

jsonToMatrix([{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }])

// [["a.b", "a.c", "a.d"],[1, 2, ""], [3, "", 4]]
