
// const arr = []
// let idx = 0
// for (let i = 0; i < nums.length; i++) {
//   if (arr[idx] == nums[i]) continue;
//   arr[++idx] = nums[i]
// }

// console.log(arr);

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

if (!nums.length) return 0;
let i = 0;
for (var j = 1; j < nums.length; j++) {
  if (nums[j] !== nums[i]) {
    i++;
    nums[i] = nums[j];
  }
}
console.log(i+1);