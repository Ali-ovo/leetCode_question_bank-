function detectCapitalUse(word) {
  // return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/g.test(word)
  return word === word.toUpperCase() || word === word.toLowerCase() || word === word[0].toUpperCase() + word.slice(1).toLowerCase()
}

detectCapitalUse('USA') // true
detectCapitalUse('FlaG') // false
