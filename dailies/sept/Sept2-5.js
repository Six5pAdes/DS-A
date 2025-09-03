// mon
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

// tues
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

console.log(maxProd([1, 2, -3, 4]));
console.log(maxProd([-2, -1]));

// weds

// thurs

// fri
