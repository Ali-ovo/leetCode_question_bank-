var plusOne = function (digits) {

  // digits[digits.length - 1] = Number(digits[digits.length - 1]) + 1

  // digits.forEach((item, idx) => {
  //   console.log(item);
  //   if (item >= 10) {
  //     if (idx == 0) {
  //       digits[0] = item / 10
  //       digits[1] = item % 10
  //     } else {
  //       digits[idx - 1] = Number(digits[idx - 1]) + 1
  //       digits[idx] = item % 10
  //     }
  //   }
  // })

  // digits.map((item, idx) => {
  //   digits[digits.length - 1 ] = digits[digits.length - 1 ] + 1
  //   if (digits[idx] >= 10) {
  //     if(idx == 0){
  //       digits.unshift(1)
  //       digits[idx] = 0
  //     }
  //   }
  // })

  // let i = digits.length - 1
  // while (digits[i] == 9) {
  //   digits[i] = 0;
  //   i++
  // }
  // if (i < 0) {
  //   digits.unshift(1)
  // } else {
  //   digits[i] = Number(digits[i]) + 1
  // }

  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] != 0)
      return digits;
  }
  digits = Array(len + 1).fill(0)
  digits[0] = 1;
  return digits;
};

console.log(plusOne([8, 9]));