function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = []
  const proOrder = (root)=>{
    if(root == null) return res
    res.push(root.val)
    proOrder(root.left)
    proOrder(root.right)
  }

  proOrder(root)
  return res
  
}
console.log(preorderTraversal(new TreeNode([1, null, 2, 3])))
