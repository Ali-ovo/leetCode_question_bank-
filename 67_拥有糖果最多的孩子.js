var kidsWithCandies = function (candies, extraCandies) {
  let max = 0
  for (const candie of candies) { // 找到数组中最大值
    max = Math.max(max, candie)
  }
  for (let i = 0; i < candies.length; i++) { // 再循环一遍数组
    candies[i] = candies[i] + extraCandies >= max
  }
  return candies
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))