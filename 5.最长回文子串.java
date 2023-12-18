/*
 * @lc app=leetcode.cn id=5 lang=java
 *
 * [5] 最长回文子串
 */

// @lc code=start
class Solution {
    public String longestPalindrome(String s) {
        int max = 0;
        int start = -1;
        int len = s.length();

        for (int i = 0; i < len; i++) {
            int now = 1;
            int left = i - 1;

            while ((i + 1 < len) && s.charAt(i + 1) == s.charAt(i)) {
                now++;
                i++;
            }

            int right = i + 1;
            while (left >= 0 && right < len && s.charAt(left) == s.charAt(right)) {
                now += 2;
                left--;
                right++;
            }

            if (now > max) {
                max = now;
                start = left + 1;
            }

        }
        return s.substring(start, start + max);
    }
}



class mainSolutionlongestPalindrome {
    public static void main(String[] args) {
        Solution solution = new Solution();
        String s = "babad";
        String res = solution.longestPalindrome(s);
        System.out.println(res);
    }
}
// @lc code=end
