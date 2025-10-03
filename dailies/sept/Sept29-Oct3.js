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

// console.log(maxCoins([4, 2, 3, 7]));

// tues
/* You are given an input string s consisting of lowercase english letters, and a pattern p consisting of lowercase english letters, as well as '.', and '*' characters.
Return true if the pattern matches the entire input string, otherwise return false.

'.' Matches any single character
'*' Matches zero or more of the preceding element.

Example 1:
Input: s = "aa", p = ".b"
Output: false
Explanation: Regardless of which character we choose for the '.' in the pattern, we cannot match the second character in the input string.

Example 2:
Input: s = "nnn", p = "n*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'n'. We choose 'n' to repeat three times.

Example 3:
Input: s = "xyz", p = ".*z"
Output: true
Explanation: The pattern ".*" means zero or more of any character, so we choose ".." to match "xy" and "z" to match "z".
*/

// time & space: O(n * m)

function isMatch(s, p) {
  let n = s.length;
  let m = p.length;

  let dp = new Array(n + 1).fill(false).map(() => new Array(m + 1).fill(false));
  dp[n][m] = true;

  for (let i = n; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      let match = i < s.length && (s[i] === p[j] || p[j] === ".");

      if (j + 1 < p.length && p[j + 1] === "*") {
        dp[i][j] = dp[i][j + 2];

        if (match) {
          dp[i][j] = dp[i][j] || dp[i + 1][j];
        }
      } else if (match) {
        dp[i][j] = dp[i + 1][j + 1];
      }
    }
  }

  return dp[0][0];
}

// console.log(isMatch("aa", ".b"));
// console.log(isMatch("nnn", "n*"));
// console.log(isMatch("xyz", ".*z"));

// weds
/* Given an array of integers nums, find the subarray with the largest sum and return the sum.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [2,-3,4,-2,2,1,-1,4]
Output: 8
Explanation: The subarray [4,-2,2,1,-1,4] has the largest sum 8.

Example 2:
Input: nums = [-1]
Output: -1
*/

// time: O(n), space: O(1)

function maxSubArray(nums) {
  let maxSub = nums[0],
    currSub = 0;

  for (const num of nums) {
    if (currSub < 0) currSub = 0;
    currSub += num;
    maxSub = Math.max(maxSub, currSub);
  }

  return maxSub;
}

// console.log(maxSubArray([2, -3, 4, -2, 2, 1, -1, 4]));
// console.log(maxSubArray([-1]));

// thurs
/* You are given an integer array nums where each element nums[i] indicates your maximum jump length at that position.
Return true if you can reach the last index starting from index 0, or false otherwise.

Example 1:
Input: nums = [1,2,0,1,0]
Output: true
Explanation: First jump from index 0 to 1, then from index 1 to 3, and lastly from index 3 to 4.

Example 2:
Input: nums = [1,2,1,0,1]
Output: false
*/

// time: O(n), space: O(1)

function canJump(nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
}

// console.log(canJump([1, 2, 0, 1, 0]));
// console.log(canJump([1, 2, 1, 0, 1]));

// fri
/* You are given an array of integers nums, where nums[i] represents the maximum length of a jump towards the right from index i. For example, if you are at nums[i], you can jump to any index i + j where:
j <= nums[i]
i + j < nums.length
You are initially positioned at nums[0].
Return the minimum number of jumps to reach the last position in the array (index nums.length - 1). You may assume there is always a valid answer.

Example 1:
Input: nums = [2,4,1,1,1,1]
Output: 2
Explanation: Jump from index 0 to index 1, then jump from index 1 to the last index.

Example 2:
Input: nums = [2,1,2,1,0]
Output: 2
*/

// time: O(n), space: O(1)

function canJump2(nums) {
  let res = 0,
    l = 0,
    r = 0;

  while (r < nums.length - 1) {
    let far = 0;

    for (let i = l; i <= r; i++) {
      far = Math.max(far, i + nums[i]);
    }

    l = r + 1;
    r = far;
    res++;
  }

  return res;
}

console.log(canJump2([2, 4, 1, 1, 1, 1]));
console.log(canJump2([2, 1, 2, 1, 0]));
