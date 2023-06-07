function objDiff(obj1, obj2) {
  const diff = {}
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    if (obj1 === obj2) {
      return diff
    }
    // 类型不同（数组+对象）
    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
      return [obj1, obj2]
    }
    for (const key of Object.keys(obj1)) {
      if (obj2.hasOwnProperty(key)) {
        const result = objDiff(obj1[key], obj2[key])
        // 空对象or空数组视为相同
        if (result && Object.keys(result).length) {
          diff[key] = result
        }
      }
    }
  } else if (obj1 !== obj2) {
    return [obj1, obj2]
  }
  return diff
}

// 输入：
const obj1 = {
  a: 5,
  v: 6,
  z: [1, 2, 4, [2, 5, 7]],
}
const obj2 = {
  a: 5,
  v: 7,
  z: [1, 2, 3, [1]],
}

objDiff(obj1, obj2)
// 输出：
// {
//   "v": [6, 7],
//   "z": {
//     "2": [4, 3],
//     "3": {
//       "0": [2, 1]
//     }
//   }
// }
