// mon
/* You are given an integer array digits, where each digits[i] is the ith digit of a large integer. It is ordered from most significant to least significant digit, and it will not contain any leading zero.
Return the digits of the given integer after incrementing it by one.

Example 1:
Input: digits = [1,2,3,4]
Output: [1,2,3,5]
Explanation 1234 + 1 = 1235.

Example 2:
Input: digits = [9,9,9]
Output: [1,0,0,0]
*/

// time & space: O(n)

function plusOne(digits) {
  const d = digits.length;

  for (let i = d - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  const result = new Array(d + 1).fill(0);
  result[0] = 1;
  return result;
}

console.log(plusOne([1, 2, 3, 4]));
console.log(plusOne([9, 9, 9]));

// tues
/* */

// time: O()

function ____() {}

// console.log()

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
