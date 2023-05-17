function promisePool(functions, n) {
  return Promise.all(
    Array(n)
      .fill(null)
      .map(async () => {
        while (functions.length) {
          const f = functions.shift()
          await f()
        }
      })
  )
}

const sleep = (t) => new Promise((res) => setTimeout(res, t))

promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log) // After 900ms
