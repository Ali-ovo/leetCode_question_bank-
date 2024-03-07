/*
 * @lc app=leetcode.cn id=22 lang=java
 *
 * [22] 括号生成
 */

// @lc code=start

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<String>();
        generate(0, 0, n, "", res);

        return res;
    }

    public void generate(int left, int right, int n, String s, List<String> res) {
        if (left == n && right == n) {
            res.add(s);
            return;
        }

        if (left < n) {
            generate(left + 1, right, n, s + "(", res);
        }
        if (right < left) {
            generate(left, right + 1, n, s + ")", res);
        }

    }
}
// @lc code=end
