var reverseBits = function (n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) + (n & 1);
    n = n >>> 1;
  }

  return res >>> 0;
};

console.log(reverseBits(11111111111111111111111111111101));