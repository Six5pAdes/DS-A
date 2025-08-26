/* You are given an integer array nums where nums[i] represents the amount of money the ith house has. The houses are arranged in a circle, i.e. the first house and the last house are neighbors.
You are planning to rob money from the houses, but you cannot rob two adjacent houses because the security system will automatically alert the police if two adjacent houses were both broken into.
Return the maximum amount of money you can rob without alerting the police.

Example 1:
Input: nums = [3,4,3]
Output: 4
Explanation: You cannot rob nums[0] + nums[2] = 6 because nums[0] and nums[2] are adjacent houses. The maximum you can rob is nums[1] = 4.

Example 2:
Input: nums = [2,9,8,3,6]
Output: 15
Explanation: You cannot rob nums[0] + nums[2] + nums[4] = 16 because nums[0] and nums[4] are adjacent houses. The maximum you can rob is nums[1] + nums[4] = 15.
*/

// time, space: O()

import java.util.Arrays;

public class augTwentysix {
    public int rob(int[] nums) {
        if (nums.length == 1) return nums[0];

        return Math.max(
            helper(Arrays.copyOfRange(nums, 1, nums.length)),
            helper(Arrays.copyOfRange(nums, 0, nums.length - 1))
        );
    }

    private int helper(int[] nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];

        int dp[] = new int[nums.length];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (int i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
        }

        return dp[nums.length - 1];
    }

    public static void main(String[] args) {
        augTwentysix solution = new augTwentysix();
        System.out.println(solution.rob(new int[]{3,4,3}));
        System.out.println(solution.rob(new int[]{2,9,8,3,6}));
    }
}
