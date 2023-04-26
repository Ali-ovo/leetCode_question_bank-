function findMedianSortedArrays(nums1, nums2) {
  let arr = nums1.concat(nums2)
  arr.sort((a, b) => a - b)
  let len = arr.length
  if (len % 2 === 0) {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2
  } else {
    return arr[Math.floor(len / 2)]
  }
}

console.log(findMedianSortedArrays([1, 2], [3, 4]))
