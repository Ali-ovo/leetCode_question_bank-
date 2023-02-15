var nextGreaterElement = function (nums1, nums2 = []) {
  let map = new Map(), stack = [], ans = [];

  nums2.forEach(item => {
    while (stack.length && item > stack[stack.length - 1]) {
      map.set(stack.pop(), item)
    };
    stack.push(item);
  });

  stack.forEach(item => map.set(item, -1));
  nums1.forEach(item => ans.push(map.get(item)));
  return ans;
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));

