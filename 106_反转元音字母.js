function reverseVowels(s) {
  const vowels = 'aeiouAEIOU'
  const arr = Array.from(s)
  let left = 0,
    right = arr.length - 1

  // while(left<right){
  // const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  // if (vowels.includes(arr[left])) {
  //   if (vowels.includes(arr[right])) {
  //     let temp = arr[left]
  //     arr[left] = arr[right]
  //     arr[right] = temp
  //     left++
  //     right--
  //   } else {
  //     right--
  //   }
  // } else {
  //   left++
  // }
  // }

  while (left < right) {
    if (!~vowels.indexOf(arr[left])) {
      left++
    }
    if (!~vowels.indexOf(arr[right])) {
      right--
    }
    if (~vowels.indexOf(arr[left]) && ~vowels.indexOf(arr[right])) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  return arr.join('')
}

reverseVowels('leetcode')
