/*
 * @lc app=leetcode.cn id=6 lang=java
 *
 * [6] N 字形变换
 */

// @lc code=start

class Solution {
    public String convert(String s, int numRows) {
        if (numRows <= 1)
            return s;

        int len = Math.min(numRows, s.length());

        StringBuilder[] rows = new StringBuilder[len];

        for (int i = 0; i < len; i++) {
            rows[i] = new StringBuilder();
        }

        int loc = 0;
        boolean down = false;
        for (char code : s.toCharArray()) {
            rows[loc].append(code);
            if (loc == 0 || loc == numRows - 1)
                down = !down;
            loc += down ? 1 : -1;
        }

        StringBuilder ans = new StringBuilder();
        for (StringBuilder row : rows) {
            ans.append(row);
        }

        return ans.toString();
    }
}
// @lc code=end

class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        String s = "LEETCODEISHIRING";
        int numRows = 3;
        String result = solution.convert(s, numRows);
        System.out.println(result);
    }
}