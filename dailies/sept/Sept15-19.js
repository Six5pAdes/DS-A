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

// console.log(partition([1, 2, 3, 4]));
// console.log(partition([1, 2, 3, 4, 5]));

// tues
/* There is an m x n grid where you are allowed to move either down or to the right at any point in time.
Given the two integers m and n, return the number of possible unique paths that can be taken from the top-left corner of the grid (grid[0][0]) to the bottom-right corner (grid[m - 1][n - 1]).
You may assume the output will fit in a 32-bit integer.

Example 1:
Input: m = 3, n = 6
Output: 21

Example 2:
Input: m = 3, n = 3
Output: 6
*/

// time & space: O(m * n)

function unique(m, n) {
  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  dp[m - 1][n - 1] = 1;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] += dp[i + 1][j] + dp[i][j + 1];
    }
  }

  return dp[0][0];
}

console.log(unique(3, 6));
console.log(unique(3, 3));

// weds

// thurs

// fri
