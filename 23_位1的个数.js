var hammingWeight = function (n) {
  return n.toString(2).replace(/0/g, "").length
};

console.log(hammingWeight(00000000000000000000000000001011));