var climbStairs = function(n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
      p = q;  // p = 3
      q = r;  // q = 5
      r = p + q; //r = 8
  }
  return r;
};

console.log(climbStairs(5));