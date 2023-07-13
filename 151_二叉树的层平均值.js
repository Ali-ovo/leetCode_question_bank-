/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfLevels(root) {
  //层级平均值
  let res = [],
    queue = [root]
  while (queue.length && root !== null) {
    //每一层节点个数
    let length = queue.length
    //sum记录每一层的和
    let sum = 0
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      sum += node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    //每一层的平均值存入数组res
    res.push(sum / length)
  }
  return res
}
