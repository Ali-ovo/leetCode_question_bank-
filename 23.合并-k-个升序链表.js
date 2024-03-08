/*
 * @Description:
 * @Author: Ali
 * @Date: 2024-03-08 11:07:02
 * @LastEditors: Ali
 * @LastEditTime: 2024-03-08 11:20:20
 */
/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const linkedLists = [
  {
    val: 1,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null,
      },
    },
  },
  {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
  {
    val: 2,
    next: {
      val: 6,
      next: null,
    },
  },
]

var mergeKLists = function (lists) {
  const mergerTwoList = (l1, l2) => {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val < l2.val) {
      l1.next = mergerTwoList(l1.next, l2)
      return l1
    } else {
      l2.next = mergerTwoList(l1, l2.next)
      return l2
    }
  }

  const merge = (lists, l, r) => {
    if (l === r) return lists[l]
    if (l > r) return null
    const mid = (l + r) >> 1
    return mergerTwoList(merge(lists, l, mid), merge(lists, mid + 1, r))
  }

  return merge(lists, 0, lists.length - 1)
}
// @lc code=end

mergeKLists(linkedLists)
