function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false
  // const resMap = new Map()
  // for (let i = 0; i < ransomNote.length; i++) {
  //   let mapItem = resMap.get(ransomNote[i])
  //   if (mapItem) {
  //     resMap.set(ransomNote[i], mapItem + 1)
  //   } else {
  //     resMap.set(ransomNote[i], 1)
  //   }
  // }
  // for (let i = 0; i < magazine.length; i++) {
  //   let mapItem = resMap.get(magazine[i])
  //   if (mapItem) {
  //     if (mapItem - 1 === 0) {
  //       resMap.delete(magazine[i])
  //     } else {
  //       resMap.set(magazine[i], mapItem - 1)
  //     }
  //   } else {
  //     if (resMap.size === 0) return true
  //   }
  // }
  // return resMap.size === 0

  const cnt = new Array(26).fill(0)
  for (const c of magazine) {
    cnt[c.charCodeAt() - 'a'.charCodeAt()]++
  }

  console.log('cnt', cnt)
  for (const c of ransomNote) {
    cnt[c.charCodeAt() - 'a'.charCodeAt()]--
    if (cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
      return false
    }
  }
  return true
}

console.log(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'))
