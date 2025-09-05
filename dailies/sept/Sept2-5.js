// tues
/* You are given an integer array "coins" representing coins of different denominations (e.g. 1 dollar, 5 dollars, etc) and an integer "amount" representing a target amount of money.
Return the fewest number of coins that you need to make up the exact target amount. If it is impossible to make up the amount, return -1.
You may assume that you have an unlimited number of each coin.

Example 1:
Input: coins = [1,5,10], amount = 12
Output: 3
Explanation: 12 = 10 + 1 + 1. Note that we do not have to use every kind coin available.

Example 2:
Input: coins = [2], amount = 3
Output: -1
Explanation: The amount of 3 cannot be made up with coins of 2.

Example 3:
Input: coins = [1], amount = 0
Output: 0
Explanation: Choosing 0 coins is a valid way to make up 0.
*/

// time: O(n * t), space: O(t)

function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}

// console.log(coinChange([1, 5, 10], 12));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));

// weds
/* Given an integer array nums, find a subarray that has the largest product within the array and return it.
A subarray is a contiguous non-empty sequence of elements within an array.
You can assume the output will fit into a 32-bit integer.

Example 1:
Input: nums = [1,2,-3,4]
Output: 4

Example 2:
Input: nums = [-2,-1]
Output: 2
*/

// time: O(n), space: O(1)

function maxProd(nums) {
  let res = nums[0];
  let currMin = 1,
    currMax = 1;

  for (const num of nums) {
    const temp = currMax * num;

    currMax = Math.max(Math.max(num * currMax, num * currMin), num);
    currMin = Math.min(Math.min(temp, num * currMin), num);

    res = Math.max(res, currMax);
  }

  return res;
}

// console.log(maxProd([1, 2, -3, 4]));
// console.log(maxProd([-2, -1]));

// thurs
/* Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of dictionary words.
You are allowed to reuse words in the dictionary an unlimited number of times. You may assume all dictionary words are unique.

Example 1:
Input: s = "neetcode", wordDict = ["neet","code"]
Output: true
Explanation: Return true because "neetcode" can be split into "neet" and "code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen","ape"]
Output: true
Explanation: Return true because "applepenapple" can be split into "apple", "pen" and "apple". Notice that we can reuse words and also not use all the words.

Example 3:
Input: s = "catsincars", wordDict = ["cats","cat","sin","in","car"]
Output: false
*/

// time: O(n * m * t), space: O(n)

function wordBreak(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (const word of wordDict) {
      if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
        dp[i] = dp[i + word.length];
      }

      if (dp[i]) break;
    }
  }

  return dp[0];
}

// console.log(wordBreak("neetcode", ["neet", "code"]));
// console.log(wordBreak("applepenapple", ["apple", "pen", "ape"]));
// console.log(wordBreak("catsincars", ["cats", "cat", "sin", "in", "car"]));

// fri
/* Given an integer array nums, return the length of the longest strictly increasing subsequence.
A subsequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the relative order of the remaining characters.
For example, "cat" is a subsequence of "crabt".

Example 1:
Input: nums = [9,1,4,2,3,3,7]
Output: 4
Explanation: The longest increasing subsequence is [1,2,3,7], which has a length of 4.

Example 2:
Input: nums = [0,3,1,3,2,3]
Output: 4
 */

// time & space: O(n^2)

function listLen(nums) {
  const n = nums.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i - 1; j >= -1; j--) {
      let list = dp[i + 1][j + 1];

      if (j === -1 || nums[j] < nums[i]) {
        list = Math.max(list, 1 + dp[i + 1][i + 1]);
      }

      dp[i][j + 1] = list;
    }
  }

  return dp[0][0];
}

console.log(listLen([9, 1, 4, 2, 3, 3, 7]));
console.log(listLen([0, 3, 1, 3, 2, 3]));
