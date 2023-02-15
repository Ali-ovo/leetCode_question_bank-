function getKth(lo, hi, k) {
  let sum = 0
  const map = new Map();

  let fun = function (num) {
    if (num == 1) {
      map.set(i, sum)
      sum = 0
      return
    }

    if (map.get(num)) {
      sum += map.get(num);
      map.set(i, sum)
      sum = 0
      return
    } else {
      if (num % 2 === 0) {
        num = num / 2
      } else {
        num = 3 * num + 1
      }
      sum++;
      fun(num)
    }
  }

  for (var i = lo; i <= hi; i++) {
    fun(i);
  }

  const arr = [...map]
  arr.sort((a, b) => a[1] - b[1]);
  console.log(arr[k - 1])
  return arr[k - 1][0];
};



getKth(7, 11, 4)