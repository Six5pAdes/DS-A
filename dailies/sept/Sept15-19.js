// mon
/* You are given an array of positive integers nums.
Return true if you can partition the array into two subsets, subset1 and subset2 where sum(subset1) == sum(subset2). Otherwise, return false.

Example 1:
Input: nums = [1,2,3,4]
Output: true
Explanation: The array can be partitioned as [1, 4] and [2, 3].

Example 2:
Input: nums = [1,2,3,4,5]
Output: false
*/

// time & space; O(n * t)

function partition(nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  const target = sum / 2;
  const n = nums.length;
  const dp = Array.from(Array(n + 1), () => Array(target + 1).fill(false));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      if (nums[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][target];
}

console.log(partition([1, 2, 3, 4]));
console.log(partition([1, 2, 3, 4, 5]));

// tues

// weds

// thurs

// fri
