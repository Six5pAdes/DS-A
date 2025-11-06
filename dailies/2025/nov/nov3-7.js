// mon
/* You are given an unsigned integer n. Return the number of 1 bits in its binary representation.
You may assume n is a non-negative integer which fits within 32-bits.

Example 1:
Input: n = 00000000000000000000000000010111
Output: 4

Example 2:
Input: n = 01111111111111111111111111111101
Output: 30
*/

// time & space: O(1)

function hammingWeight(n) {
  let res = 0;
  while (n !== 0) {
    n &= n - 1;
    res++;
  }

  return res;
}

// console.log(hammingWeight(0b00000000000000000000000000010111));
// console.log(hammingWeight(0b01111111111111111111111111111101));

// tues
/* Given an integer n, count the number of 1's in the binary representation of every number in the range [0, n].
Return an array output where output[i] is the number of 1's in the binary representation of i.

Example 1:
Input: n = 4
Output: [0,1,1,2,1]

Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
*/

// time & space: O(n)

function countBits(n) {
  const res = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    res[i] = res[i >> 1] + (i & 1);
  }

  return res;
}

// console.log(countBits(4));

// wed
/* Given a 32-bit unsigned integer n, reverse the bits of the binary representation of n and return the result.

Example 1:
Input: n = 00000000000000000000000000010101
Output:    2818572288 (10101000000000000000000000000000)

Explanation: Reversing 00000000000000000000000000010101, which represents the unsigned integer 21, gives us 10101000000000000000000000000000 which represents the unsigned integer 2818572288.
*/

// time & space: O(1)

function reverseBits(n) {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    const bit = (n >>> i) & 1;
    res += bit << (31 - i);
  }

  return res >>> 0;
}

// console.log(reverseBits(0o00000000000000000000000000010101));

// thurs
/* Given an array nums containing n integers in the range [0, n] without any duplicates, return the single number in the range that is missing from nums.
Follow-up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

Example 1:
Input: nums = [1,2,3]
Output: 0
Explanation: Since there are 3 numbers, the range is [0,3]. The missing number is 0 since it does not appear in nums.

Example 2:
Input: nums = [0,2]
Output: 1
*/

// time: O(n), space: O(1)

function missingNumber(nums) {
  let res = nums.length;

  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }

  return res;
}

console.log(missingNumber([1, 2, 3]));
console.log(missingNumber([0, 2]));

// fri
/* */

// time: O()

function ____() {}

// console.log()
