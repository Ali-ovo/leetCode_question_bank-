/*
 * @lc app=leetcode.cn id=7 lang=java
 *
 * [7] 整数反转
 */

// @lc code=start
class Solution {
    public int reverse(int x) {
        int res = 0;

        while (x != 0) {
            int temp = x % 10;
            x /= 10;

            try {
                res = Math.addExact(Math.multiplyExact(res, 10), temp);
            } catch (ArithmeticException e) {
                return 0;
            }
        }

        return res;
    }
}
// @lc code=end
