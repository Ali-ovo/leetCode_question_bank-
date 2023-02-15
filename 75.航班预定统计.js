var corpFlightBookings = function (bookings = [], n) {
    // let arr = new Array(n).fill(0)
    // let len = bookings.length
    // for (var i = 0; i < len; i++) {

    //     for (var k = bookings[i][0]; k <= bookings[i][1]; k++) {
    //         arr[k - 1] += bookings[i][2]
    //     }
    // }
    // return arr


    const nums = new Array(n).fill(0);
    for (const booking of bookings) {
        nums[booking[0] - 1] += booking[2];
        if (booking[1] < n) {
            nums[booking[1]] -= booking[2];
        }
    }


    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};


console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5));