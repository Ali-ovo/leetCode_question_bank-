/*
 * @lc app=leetcode.cn id=1 lang=java
 *
 * [1] 两数之和
 */

// @lc code=start

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        int n = nums.length;

        // Build the hash table
        for (int i = 0; i < n; i++) {
            numMap.put(nums[i], i);
        }

        // Find the complement
        for (int i = 0; i < n; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement) && numMap.get(complement) != i) {
                return new int[] { i, numMap.get(complement) };
            }
        }

        return new int[] {}; // No solution found
    }
}

class Main {
    public static void main(String[] args) {
        Solution s = new Solution();
        int[] nums = { 2, 7, 11, 15 };
        int target = 9;
        int[] result = s.twoSum(nums, target);
        System.out.println(Arrays.toString(result));
    }
}
// @lc code=end
