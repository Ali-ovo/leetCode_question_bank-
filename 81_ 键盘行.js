var findWords = function (words) {
  return words.filter(x => /(^[qwertyuiop]+$)|(^[asdfghjkl]+$)|(^[zxcvbnm]+$)/i.test(x))
};


console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));