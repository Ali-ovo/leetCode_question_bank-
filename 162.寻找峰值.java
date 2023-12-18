/*
 * @lc app=leetcode.cn id=162 lang=java
 *
 * [162] 寻找峰值
 */

// @lc code=start
class Solution {
    public int findPeakElement(int[] nums) {
        int len = nums.length;
        int left = 0;
        int right = len - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[mid + 1]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}

// @lc code=end

class MainfindPeakElement {
    public static void main(String[] args) {
        Solution solutionfindPeakElement = new Solution();
        int[] nums = { 1, 2, 3, 1 };
        int res = solutionfindPeakElement.findPeakElement(nums);
        System.out.println(res);
    }
}
