/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let [i, j] = [0, 0]
  let newArr = []
  const len = nums1.length + nums2.length

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      newArr.push(nums1[i])
      i++
    } else if (nums1[i] > nums2[j]) {
      newArr.push(nums2[j])
      j++
    } else if (nums1[i] === nums2[j]) {
      newArr.push(nums1[i])
      newArr.push(nums2[j])
      i++, j++
    }
  }

  if (i < nums1.length) {
    newArr = newArr.concat(nums1.splice(i))
  } else if (j < nums2.length) {
    newArr = newArr.concat(nums2.splice(j))
  }

  const mid = newArr.length >>> 1

  return len % 2 === 0 ? (newArr[mid] + newArr[mid - 1]) / 2 : newArr[mid]
}
// @lc code=end

findMedianSortedArrays([1, 2], [3, 4])
