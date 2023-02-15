var smallestK = function (arr, k) {


  return arr.sort((a, b) => a - b).splice(0, k)
};




console.log(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4));