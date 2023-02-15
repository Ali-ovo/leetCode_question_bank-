function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function (nums) {
  // 将闭区间 [low, high] 中的元素转化成 BST，返回根节点
  let build = (low, high) => {
    // 区间为空
    if (low > high) return null;
    let mid = low + ((high - low) >> 1);
    // 构造根节点，BST 节点左小右大，中间的元素就是根节点
    return new TreeNode(nums[mid], build(low, mid - 1), build(mid + 1, high));
  };
  return build(0, nums.length - 1);
};


console.log(sortedArrayToBST([1]));