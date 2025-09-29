// mon
/* You are given an array of integers nums of size n. The ith element represents a balloon with an integer value of nums[i]. You must burst all of the balloons.

If you burst the ith balloon, you will receive nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then assume the out of bounds value is 1.
Return the maximum number of coins you can receive by bursting all of the balloons.

Example 1:
Input: nums = [4,2,3,7]
Output: 143
Explanation:
nums = [4,2,3,7] --> [4,3,7] --> [4,7] --> [7] --> []
coins =  4*2*3    +   4*3*7   +  1*4*7  + 1*7*1 = 143
*/

// time: O(n^3), space: O(n^2)

function maxCoins(nums) {
  let n = nums.length;
  let numArr = new Array(n + 2).fill(1);

  for (let i = 0; i < n; i++) {
    numArr[i + 1] = nums[i];
  }

  let dp = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));
  for (let l = n; l >= 1; l--) {
    for (let r = l; r <= n; r++) {
      for (let i = l; i <= r; i++) {
        let coins = numArr[l - 1] * numArr[i] * numArr[r + 1];
        coins += dp[l][i - 1] + dp[i + 1][r];
        dp[l][r] = Math.max(dp[l][r], coins);
      }
    }
  }

  return dp[1][n];
}

console.log(maxCoins([4, 2, 3, 7]));

// tues
/* */

// time: O()

function ____() {}

// console.log();

// weds
/* */

// time: O()

function ____() {}

// console.log()

// thurs
/* */

// time: O()

function ____() {}

// console.log()

// fri
/* */

// time: O()

function ____() {}

// console.log()
