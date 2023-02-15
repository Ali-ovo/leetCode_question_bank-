const arr = [3,5,7,9,10]

var searchInsert = function (nums, target) {
  let index = nums.indexOf(target)
  if(index> -1){
    return index
  }else {
    nums.push(target)
    nums.sort((x,y)=>x-y)
    console.log(nums);
    return nums.indexOf(target)
  }
};
console.log(searchInsert(arr, 8));