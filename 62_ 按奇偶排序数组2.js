var sortArrayByParity = function (A) {
  const n  = A.length;
  const ans = new Array(n);
  let i = 0;
  for (const x of A) {
      if (!(x & 1)) {
          ans[i] = x;
          i += 2;
      } 
  }

  i = 1;
  for (const x of A) {
      if (x & 1) {
          ans[i] = x;
          i += 2;
      }
  }

  return ans;
};

console.log(sortArrayByParity([4, 2, 5, 7]));