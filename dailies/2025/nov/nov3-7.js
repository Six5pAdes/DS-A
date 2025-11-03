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

console.log(hammingWeight(0b00000000000000000000000000010111));
console.log(hammingWeight(0b01111111111111111111111111111101));

// tues
/* */

// time: O()

function ____() {}

// console.log()

// wed
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
