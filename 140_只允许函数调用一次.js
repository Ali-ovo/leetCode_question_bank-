function once(fn) {
  // let num = 0
  // return function (...args) {
  //   if (num > 0) return
  //   num++
  //   return fn(...args)
  // }

  // 方法二
  return function (...args) {
    try {
      return fn(...args)
    } finally {
      fn = () => {}
    }
  }
}

let fn = (a, b, c) => a + b + c
let onceFn = once(fn)
// onceFn(1, 2, 3) // 6
// onceFn(2, 3, 6) // returns undefined without calling fn
console.log('%c [ onceFn(1, 2, 3)  ]-13', 'font-size:13px; background:#efb21e; color:#fff662;', onceFn(1, 2, 3))
console.log('%c [ onceFn(1, 2, 3)  ]-13', 'font-size:13px; background:#efb21e; color:#fff662;', onceFn(1, 2, 3))
