/*
 * @lc app=leetcode.cn id=3 lang=java
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int max = 0;
        StringBuilder temp = new StringBuilder("");

        for (int i = 0; i < s.length(); i++) {
            int index = temp.indexOf(s.charAt(i) + "");
            if (index > -1) {
                temp.delete(0, index + 1);
            }

            temp.append(s.charAt(i));
            max = Math.max(max, temp.length());
        }

        return max;

    }
}

// @lc code=end

class lengthOfLongestSubstring {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.lengthOfLongestSubstring("dvdf"));
    }

}