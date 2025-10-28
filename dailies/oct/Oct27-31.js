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

// console.log(plusOne([1, 2, 3, 4]));
// console.log(plusOne([9, 9, 9]));

// tues
/* Pow(x, n) is a mathematical function to calculate the value of x raised to the power of n (i.e., x^n).
Given a floating-point value x and an integer value n, implement the myPow(x, n) function, which calculates x raised to the power n.
You may not use any built-in library functions.

Example 1:
Input: x = 2.00000, n = 5
Output: 32.00000

Example 2:
Input: x = 1.10000, n = 10
Output: 2.59374

Example 3:
Input: x = 2.00000, n = -3
Output: 0.12500
*/

// time & space: O(log n)

function myPow(x, n) {
  const helper = (x, n) => {
    if (x === 0) return 0;
    if (n === 0) return 1;

    const res = helper(x * x, Math.floor(n / 2));
    return n % 2 === 0 ? res : res * x;
  };

  const res = helper(x, Math.abs(n));
  return n >= 0 ? res : 1 / res;
}

console.log(myPow(2.0, 5));
console.log(myPow(1.1, 10));
console.log(myPow(2.0, -3));

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
