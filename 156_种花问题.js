function canPlaceFlowers(flowerbed, n) {
  if (n === 0) return true
  flowerbed.unshift(0)
  flowerbed.push(0)

  let count = 0
  let len = flowerbed.length
  for (let i = 0; i < len; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1
      count++
    }
  }

  return count >= n
}

canPlaceFlowers([1, 0, 0, 0, 1], 1) // true
