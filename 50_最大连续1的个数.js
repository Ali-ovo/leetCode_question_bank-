// var findMaxConsecutiveOnes = function (nums) {
//   let arr = nums.map(i => i == 0 ? i = "" : i)
//   let arr2 = arr.join("").split(" ")
//   let max = 0
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].length > max) {
//       max = arr2[i].length
//     }
//   }
//   return max
// };


var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
  }
  return max;
}


console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));