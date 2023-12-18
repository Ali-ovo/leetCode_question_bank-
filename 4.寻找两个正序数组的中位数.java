/*
 * @lc app=leetcode.cn id=4 lang=java
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int i = 0, j = 0;
        int len = nums1.length + nums2.length;
        List<Integer> newArr = new ArrayList<>();

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                newArr.add(nums1[i]);
                i++;
            } else if (nums1[i] > nums2[j]) {
                newArr.add(nums2[j]);
                j++;
            } else if (nums1[i] == nums2[j]) {
                newArr.add(nums1[i]);
                newArr.add(nums2[j]);
                i++;
                j++;
            }
        }

        if (i < nums1.length) {
            List<Integer> subList = Arrays.stream(Arrays.copyOfRange(nums1, i, nums1.length))
                    .boxed()
                    .collect(Collectors.toList());

            newArr.addAll(subList);
        } else if (j < nums2.length) {

            List<Integer> subList = Arrays.stream(Arrays.copyOfRange(nums2, j, nums2.length))
                    .boxed()
                    .collect(Collectors.toList());

            newArr.addAll(subList);

        }

        int mid = len >>> 1;

        System.out.println(Arrays.toString(newArr.toArray()));
        System.out.println(mid);

        return len % 2 == 0 ? (newArr.get(mid) + newArr.get(mid - 1)) / 2.0 : newArr.get(mid);
    }
}
// @lc code=end

class MainfindMedianSortedArrays {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums1 = { 1, 2 };
        int[] nums2 = { 3, 4 };
        double result = solution.findMedianSortedArrays(nums1, nums2);
        System.out.println(result);

    }
}
