var twoSum = function (numbers, target) {
  let len = numbers.length
  if (len < 2) return []
  
  let left = 0;
  let right = len - 1
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1]
    }
    else if (numbers[left] + numbers[right] < target) {
      left++
    } else {
      right--
    }

  }
  return []
};


console.log(twoSum([2, 7, 11, 15], 9));