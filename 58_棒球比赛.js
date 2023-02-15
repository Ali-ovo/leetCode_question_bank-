var calPoints = function (ops) {
  var arr = []
  // for (const s of ops) {
  //   switch (s) {
  //     case '+':
  //       arr.push(Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]))
  //       break;
  //     case 'D':
  //       arr.push(arr[arr.length - 1] * 2)
  //       break;
  //     case 'C':
  //       arr.pop();
  //       break;


  //   }
  // }

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] == "+") {
      arr.push(Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]))
    } else if (ops[i] == "D") {
      arr.push(arr[arr.length - 1] * 2)
    } else if (ops[i] == "C") {
      arr.pop();
    } else {
      arr.push(ops[i])
    }
  }

  return arr.reduce((a, item) => {
    return a + Number(item)
  }, 0)
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));