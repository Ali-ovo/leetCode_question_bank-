function shortestCompletingWord(licensePlate, words) {
  let min = Infinity
  let res = ''
  let license = licensePlate
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .sort()
  console.log('%c [ license ]-5', 'font-size:13px; background:#559b0d; color:#99df51;', license)

  function check(license, word) {
    let i = 0
    let j = 0
    while (i < license.length && j < word.length) {
      if (license[i] === word[j]) {
        i++
        j++
      } else {
        j++
      }
    }
    return i === license.length
  }

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase().split('').sort()
    if (check(license, word)) {
      if (words[i].length < min) {
        min = words[i].length
        res = words[i]
      }
    }
  }
  return res
}

shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple']) // "steps"
shortestCompletingWord('1s3 456', ['looks', 'pest', 'stew', 'show']) // "pest"
