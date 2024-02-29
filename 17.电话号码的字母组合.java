/*
 * @lc app=leetcode.cn id=17 lang=java
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> letterCombinations(String digits) {
        if (digits.length() == 0) {
            return new ArrayList<>();
        }

        String[] map = new String[] { "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

        List<String> result = new ArrayList<>();

        dfs("", 0, digits, map, result);

        return result;
    }

    public void dfs(
            String current,
            int index,
            String digits,
            String[] map,
            List<String> result) {
        if (index == digits.length()) {
            result.add(current);
            return;
        }

        String letters = map[digits.charAt(index) - '0'];

        for (int i = 0; i < letters.length(); i++) {
            dfs(current + letters.charAt(i), index + 1, digits, map, result);
        }

    }
}
// @lc code=end
