var numJewelsInStones = function (jewels, stones) {
  let num = 0
  for (let i = 0; i < stones.length; i++) {
    const element = stones[i];
    if (jewels.indexOf(element) != -1) {
      num++;
    }
  }

  console.log(num);
};
console.log(numJewelsInStones("aA", "aAAbbbb"));