function addStrings(num1, num2) {
  let rightNum1 = num1.length - 1
  let rightNum2 = num2.length - 1
  let carry = 0
  let res = ''
  while (rightNum1 >= 0 || rightNum2 >= 0 || carry !== 0) {
    const temp = (Number(num1[rightNum1]) || 0) + (Number(num2[rightNum2]) || 0) + carry
    carry = Math.floor(temp / 10)
    res = (temp % 10) + res
    rightNum1--
    rightNum2--
  }

  return res
}

addStrings('1', '9')
