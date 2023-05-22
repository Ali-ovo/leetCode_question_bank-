function* inorderTraversal(arr) {
  let index = 0
  const resArr = arr.flat(Infinity)

  while (true) {
    if (index >= resArr.length) return
    yield resArr[index++]
  }
}

// const gen = inorderTraversal([1, [2, 3]])
// gen.next().value // 1
// gen.next().value // 2
// gen.next().value // 3
// gen.next().value// undefined


const gen = inorderTraversal([[[6]],[1,3],[]])
gen.next().value // 6
gen.next().value // 1
gen.next().value // 3
gen.next().value// undefined