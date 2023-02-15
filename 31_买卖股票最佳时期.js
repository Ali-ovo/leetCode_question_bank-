var maxProfit = function (prices) {
  let profit = 0 // 初始利润设为0
  let min = prices[0] // 确定一个股票中的最小值
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {  // 遍历时进行最小值赋值
      min = prices[i]
    } else if (prices[i] - min > profit) { // 如果出现比最大利润还要大的就进行重新赋值
      // prices[i] = 1
      profit = prices[i] - min
    }
  }
  return profit
};

console.log(maxProfit([7,5,3,8,1,6,9]));