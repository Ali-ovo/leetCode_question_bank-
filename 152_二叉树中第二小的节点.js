//    2
//   / \
//  2   4
//     / \
//    5   7

function findSecondMinimumValue(root) {
  let ans = -1 // 用于记录第二小的值
  const rootvalue = root.val

  const dfs = (node) => {
    if (node === null) {
      return
    }
    if (ans !== -1 && node.val >= ans) {
      return
    }
    if (node.val > rootvalue) {
      ans = node.val
    }
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return ans
}
