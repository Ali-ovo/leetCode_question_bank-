function areDeeplyEqual(o1, o2) {
  if (o1 === o2) return true
  if (Object.prototype.toString.call(o1) !== Object.prototype.toString.call(o2)) return false
  if (typeof o1 !== 'object' && typeof o2 !== 'object') return o1 === o2
  if (o1 !== o1 && o2 !== o2) return true

  if (typeof o1 === 'object') {
    if (Object.keys(o1).length !== Object.keys(o2).length) return false
    for (let key in o1) {
      if (!areDeeplyEqual(o1[key], o2[key])) return false
    }
  }
  return true
}

areDeeplyEqual('hello world', 'hello world!')
areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ['1', '2', '3'] })
areDeeplyEqual({ y: 2, x: 1 }, { x: 1, y: 2 })
