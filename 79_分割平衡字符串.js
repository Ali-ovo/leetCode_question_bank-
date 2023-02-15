
var balancedStringSplit = function (s) {
  let ans = 0, d = 0;
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (ch === 'L') {
      ++d;
    } else {
      --d;
    }
    if (d === 0) {
      ++ans;
    }
  }
  return ans;
};

console.log(balancedStringSplit('RLRRLLRLRL'));