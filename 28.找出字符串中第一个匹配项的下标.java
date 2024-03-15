/*
 * @lc app=leetcode.cn id=28 lang=java
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
class Solution {
    public int strStr(String haystack, String needle) {
        int pre = 0;
        int after = 0;

        while (pre < haystack.length() && after < needle.length()) {

            if (pre + after >= haystack.length())
                return -1;
                
            if (haystack.charAt(pre + after) == needle.charAt(after)) {
                after++;
            } else {
                pre++;
                after = 0;
            }

        }

        return after == needle.length() ? pre : -1;

    }
}
// @lc code=end
