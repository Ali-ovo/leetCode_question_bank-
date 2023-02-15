// 通过异或的性质进行求解
// a ^ b = c 可以推出 a ^ c = b
// 那么看题的话
// 101取反的答案是010
// 可以看出101 ^ 010 的结果为 111
// 也就是101 ^ 111 = 010
// 也就是说我们想得到010
// 只需要 101 ^ 111 的结果就是了

// 所以我们把已知数转成二进制
// 并取长度和它相同的全1的二进制数
// 进行异或就得到了答案



var findComplement = function (num) {
  return parseInt(new Array(num.toString(2).length).fill(1).join(''), 2) ^ num
};


