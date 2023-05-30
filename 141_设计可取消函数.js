function cancellable(generator) {
  // let canceled = false

  // const cancel = () => {
  //   canceled = true
  // }

  // const go = async (result) => {
  //   const k = 'error' in result ? generator.throw(result.error) : canceled ? generator.throw('Cancelled') : generator.next(result.val)

  //   if (k.done) {
  //     return k.value
  //   } else {
  //     let val

  //     try {
  //       val = await k.value
  //     } catch (error) {
  //       return await go({ error })
  //     }
  //     return await go({ val })
  //   }
  // }

  // return [cancel, go({ val: undefined })]

  let cancel = false
  function dfs(node) {
    if (node.done) return Promise.resolve(node.value)
    if (node.value instanceof Promise)
      return node.value.then(
        (res) => (cancel ? dfs(generator.throw('Cancelled')) : dfs(generator.next(res))),
        (res) => dfs(generator.throw(res))
      )
    else return dfs(generator.next(node.value))
  }
  return [() => (cancel = true), new Promise() < T > ((resolve, reject) => dfs(generator.next()).then(resolve, reject))]
}

function* tasks() {
  const val = yield new Promise((resolve) => resolve(2 + 2))
  yield new Promise((resolve) => setTimeout(resolve, 100))
  return val + 1
}
const [cancel, promise] = cancellable(tasks())
setTimeout(cancel, 50)
promise.catch(console.log) // logs "Cancelled" at t=50ms
