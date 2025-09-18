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

// console.log(unique(3, 6));
// console.log(unique(3, 3));

// weds
/* Given two strings text1 and text2, return the length of the longest common subsequence between the two strings if one exists, otherwise return 0.
A subsequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the relative order of the remaining characters.
For example, "cat" is a subsequence of "crabt".
A common subsequence of two strings is a subsequence that exists in both strings.

Example 1:
Input: text1 = "cat", text2 = "crabt"
Output: 3
Explanation: The longest common subsequence is "cat" which has a length of 3.

Example 2:
Input: text1 = "abcd", text2 = "abcd"
Output: 4

Example 3:
Input: text1 = "abcd", text2 = "efgh"
Output: 0
*/

// time & space: O(m * n)

function longestCommonSequence(text1, text2) {
  const dp = Array(text1.length + 1)
    .fill()
    .map(() => Array(text2.length + 1).fill(0));

  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][0];
}

// console.log(longestCommonSequence("abcd", "abcd"));
// console.log(longestCommonSequence("abcd", "efgh"));

// thurs
/* You are given an integer array prices where prices[i] is the price of NetCoin on the ith day.
You may buy and sell one NetCoin multiple times with the following restrictions:
After you sell your NetCoin, you cannot buy another one on the next day (i.e., there is a cooldown period of one day).
You may only own at most one NetCoin at a time.
You may complete as many transactions as you like.
Return the maximum profit you can achieve.

Example 1:
Input: prices = [1,3,4,0,4]
Output: 6
Explanation: Buy on day 0 (price = 1) and sell on day 1 (price = 3), profit = 3-1 = 2. Then buy on day 3 (price = 0) and sell on day 4 (price = 4), profit = 4-0 = 4. Total profit is 2 + 4 = 6.

Example 2:
Input: prices = [1]
Output: 0
*/

// time & space: O(n)

function maxProf(prices) {
  const dp = {};
  const dfs = (i, purchase) => {
    if (i >= prices.length) return 0;
    let key = `${i} - ${purchase}`;
    if (key in dp) return dp[key];

    let cooldown = dfs(i + 1, purchase);
    if (purchase) {
      let buy = dfs(i + 1, false) - prices[i];
      dp[key] = Math.max(buy, cooldown);
    } else {
      let sell = dfs(i + 2, true) + prices[i];
      dp[key] = Math.max(sell, cooldown);
    }

    return dp[key];
  };

  return dfs(0, true);
}

console.log(maxProf([1]));
console.log(maxProf([1, 3, 4, 0, 4]));

// fri
