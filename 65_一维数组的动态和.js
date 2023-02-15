var runningSum = function (nums) {


    // let len = nums.length - 1
    // for (let i = len; i >= 0; i--) {
    //     for (let k = i - 1; k >= 0; k--) {
    //         nums[i] += nums[k]
    //     }
    // }
    // return nums


    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums
};

console.log(runningSum([1, 2, 3, 4]));