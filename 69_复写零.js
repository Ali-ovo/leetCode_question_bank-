var duplicateZeros = function (arr) {
  var s = arr.length
  while (s >= 0) {
    if (arr[s] === 0) {

      arr.splice(s, 0, 0)
      arr.pop()
    }
    s--
  }
  console.log(arr);

  return null
};


duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])