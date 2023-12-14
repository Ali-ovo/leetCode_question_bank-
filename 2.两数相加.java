/*
 * @lc app=leetcode.cn id=2 lang=java
 *
 * [2] 两数相加
 */

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode list = new ListNode(0);
        ListNode head = list;
        int sum = 0;
        int carry = 0;

        while (l1 != null || l2 != null || sum > 0) {
            if (l1 != null) {
                sum += l1.val;
                l1 = l1.next;
            }

            if (l2 != null) {
                sum += l2.val;
                l2 = l2.next;
            }

            if (sum >= 10) {
                carry = sum / 10;
                sum = sum % 10;
            }

            head.next = new ListNode(sum);
            head = head.next;

            sum = carry;
            carry = 0;
        }

        return list.next;
    }
}

// @lc code=end

class MainaddTwoNumbers {
    public static void main(String[] args) {
        Solution s = new Solution();
        ListNode l1 = new ListNode(2);
        ListNode l2 = new ListNode(4);
        ListNode l3 = new ListNode(3);

        ListNode l4 = new ListNode(5);
        ListNode l5 = new ListNode(6);
        ListNode l6 = new ListNode(4);

        l1.next = l2;
        l2.next = l3;

        l4.next = l5;
        l5.next = l6;

        ListNode list = s.addTwoNumbers(l1, l4);
        while (list != null) {
            System.out.println(list.val);
            list = list.next;
        }
    }
}