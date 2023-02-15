var game = function (guess, answer) {
  let len = guess.length
  let num = 0
  for (let i = 0; i < len; i++) {
    if (guess[i] == answer[i]) {
      num++
    }

  }

  return num
};

console.log(game([1, 2, 3], [1, 2, 3]));