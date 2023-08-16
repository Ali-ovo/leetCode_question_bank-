function nextGreatestLetter(letters, target) {
  // const targetCode = target.charCodeAt(0)
  // let c = -1
  // const indexMap = letters.map((item) => {
  //   const itemCode = item.charCodeAt(0)

  //   if (itemCode > targetCode) {
  //     c = Math.min(itemCode - targetCode, c)
  //   }
  //   return itemCode - targetCode
  // })

  // if (c === 999) {
  //   return letters[0]
  // }

  // const index = indexMap.indexOf(c)
  // return letters[index]

  const length = letters.length
  let nextGreater = letters[0]
  for (let i = 0; i < length; i++) {
    if (letters[i] > target) {
      nextGreater = letters[i]
      break
    }
  }
  return nextGreater
}

nextGreatestLetter(['c', 'f', 'j'], 'a') // "c"
nextGreatestLetter(['c', 'f', 'j'], 'c') // "f"
