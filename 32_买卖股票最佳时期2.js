var maxProfit = function (prices) {
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;
};

console.log(maxProfit([1, 2, 3, 4, 5]));