function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // 如果节点为空则不需要再递归了 直接返回false
  if (root == null) return false;
  if (root.left == null && root.right == null) return targetSum - root.val == 0;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

console.log(
  hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22)
);
