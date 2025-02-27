/*Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,3,2]
Output: 3

Example 2:
Input: nums = [0,1,0,1,0,1,99]
Output: 99
*/

public class twentyseven {
    public int singleNumber(int[] nums) {
        int result = 0;
        for (int i = 0; i < 32; i++) {
            int sum = 0;
            // for each bit, check if the ith bit is set in each number
            for (int j = 0; j < nums.length; j++) {
                // if the ith bit is set in nums[j], increment sum
                if ((nums[j] & (1 << i)) != 0) {
                    sum++;
                }
            }
            // if the sum is not divisible by 3, set the ith bit in result
            if (sum % 3 != 0) {
                result |= (1 << i);
            }
        }
        return result;
    }
}

// Time complexity: O(n)
// Space complexity: O(1)
