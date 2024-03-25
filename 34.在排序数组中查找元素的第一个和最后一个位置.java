/*
 * @lc app=leetcode.cn id=34 lang=java
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int[] res = new int[] { -1, -1 };
        while (left <= right) {
            int mid = (left + right) >>> 1;
            if (nums[mid] == target) {
                left = mid;
                right = mid;

                while (left >= 0 && nums[left] == target) {
                    left--;
                }

                while (right < nums.length && nums[right] == target) {
                    right++;
                }

                res[0] = left + 1;
                res[1] = right - 1;

                break;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return res;

    }
}
// @lc code=end
