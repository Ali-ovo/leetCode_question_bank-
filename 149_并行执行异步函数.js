async function promiseAll(functions) {
  if (typeof functions !== 'object') return
  const resArr = []
  let count = 0
  return new Promise((res, rej) => {
    functions.forEach((it, i) => {
      it().then(
        (val) => {
          resArr[i] = val
          count++
          if (count === functions.length) {
            res(resArr)
          }
        },
        (err) => {
          rej(err)
        }
      )
    })
  })
}
promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]).then((res) => {
  console.log(res)
})
// {"t": 150, "resolved": [4, 10, 16]}
