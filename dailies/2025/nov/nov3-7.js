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

console.log(reverseBits(0o00000000000000000000000000010101));

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
