function summaryRanges(nums) {
  let first = 0,
    last = 1

  const resArr = []

  while (first <= nums.length - 1) {
    if (nums[last - 1] + 1 != nums[last]) {
      if (nums[first] === nums[last - 1]) {
        resArr.push(nums[first])
      } else {
        resArr.push(`${nums[first]}->${nums[last - 1]}`)
      }
      first = last
      last++
    } else {
      last++
    }
  }

  console.log('resArr', resArr)
  return resArr
}

summaryRanges([0, 1, 4, 5, 7, 9, 10, 11])
