/*
 * @lc app=leetcode.cn id=12 lang=java
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
class Solution {
    public String intToRoman(int num) {
        StringBuffer sb = new StringBuffer();
        int[] nums = { 1000, 900, 500, 400, 100, 90, 50, 40,
                10, 9, 5, 4, 1 };
        String[] romans = { "M", "CM", "D", "CD", "C", "XC", "L",
                "XL", "X", "IX", "V", "IV", "I" };
        for (int i = 0; i < nums.length; i++) {
            while (num >= nums[i]) {
                sb.append(romans[i]);
                num -= nums[i];
            }
        }

        return sb.toString();
    }
}
// @lc code=end
