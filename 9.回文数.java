/*
 * @lc app=leetcode.cn id=9 lang=java
 *
 * [9] 回文数
 */

// @lc code=start
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0)
            return Boolean.FALSE;
        if (x < 10)
            return Boolean.TRUE;

        int n = (int) Math.pow(10, Math.floor(Math.log10(x)));

        while (x > 0 && n > 1) {
            if (Math.floor(x / n) != x % 10)
                return Boolean.FALSE;
            x = (int) Math.floor((x % n) / 10);
            n /= 100;
        }

        return Boolean.TRUE;
    }
}

// @lc code=end

class MainisPalindrome {
    public static void main(String[] args) {
        Solution solution = new Solution();
        boolean answer = solution.isPalindrome(12321);
        System.out.println(answer);
    }
}
