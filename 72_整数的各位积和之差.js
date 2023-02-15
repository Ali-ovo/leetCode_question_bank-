var subtractProductAndSum = function (n) {

  let arr = n.toString().split('');
  let a = eval(arr.join('*'));
  let b = eval(arr.join('+'));
  return a - b;
};

console.log(subtractProductAndSum(4421));