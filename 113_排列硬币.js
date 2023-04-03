var arrangeCoins = function (n) {
  // let total = 0;
  // let res = 0;
  // for (let index = 0; index < n; index++) {
  //   total += index + 1;
  //   if (total > n) break;
  //   res++
  // }
  // return res;

  let left = 1,
    right = n
  while (left < right) {
    const mid = Math.floor((right - left + 1) / 2) + left
    if (mid * (mid + 1) <= 2 * n) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return left
}

arrangeCoins(5)
