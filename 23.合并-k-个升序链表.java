/*
 * @Description: 
 * @Author: Ali
 * @Date: 2024-03-08 11:28:15
 * @LastEditors: Ali
 * @LastEditTime: 2024-03-08 11:32:34
 */
/*
 * @lc app=leetcode.cn id=23 lang=java
 *
 * [23] 合并 K 个升序链表
 */
// public class ListNode {
//     int val;
//     ListNode next;

//     ListNode() {
//     }

//     ListNode(int val) {
//         this.val = val;
//     }

//     ListNode(int val, ListNode next) {
//         this.val = val;
//         this.next = next;
//     }
// }


// @lc code=start

class Solution {

    public ListNode mergeKLists(ListNode[] lists) {

        return merge(lists, 0, lists.length - 1);
    }

    public ListNode mergeTwoList(ListNode l1, ListNode r1) {
        if (l1 == null) {
            return r1;
        }
        if (r1 == null) {
            return l1;
        }

        if (l1.val < r1.val) {
            l1.next = mergeTwoList(l1.next, r1);
            return l1;
        } else {
            r1.next = mergeTwoList(l1, r1.next);
            return r1;
        }

    }

    public ListNode merge(ListNode[] lists, int l, int r) {
        if (l == r) {
            return lists[l];
        }
        if (l > r) {
            return null;
        }
        int mid = (l + r) / 2;
        return mergeTwoList(merge(lists, l, mid), merge(lists, mid + 1, r));
    }
}
// @lc code=end
