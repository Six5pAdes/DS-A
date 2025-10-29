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

// console.log(myPow(2.0, 5));
// console.log(myPow(1.1, 10));
// console.log(myPow(2.0, -3));

// weds
/* You are given two strings num1 and num2 that represent non-negative integers.
Return the product of num1 and num2 in the form of a string.
Assume that neither num1 nor num2 contain any leading zero, unless they are the number 0 itself.
Note: You can not use any built-in library to convert the inputs directly into integers.

Example 1:
Input: num1 = "3", num2 = "4"
Output: "12"

Example 2:
Input: num1 = "111", num2 = "222"
Output: "24642"
*/

// time: O(m * n), space: O(m + n)

function multiplyStrings(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const res = new Array(num1.length + num2.length).fill(0);
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");

  for (let i1 = 0; i1 < num1.length; i1++) {
    for (let i2 = 0; i2 < num2.length; i2++) {
      const digit = parseInt(num1[i1]) * parseInt(num2[i2]);
      res[i1 + i2] += digit;
      res[i1 + i2 + 1] += Math.floor(res[i1 + i2] / 10);
      res[i1 + i2] %= 10;
    }
  }

  let result = "";
  let i = res.length - 1;

  while (i >= 0 && res[i] == 0) i--;
  while (i >= 0) result += res[i--];

  return result;
}

console.log(multiplyStrings("3", "4"));
console.log(multiplyStrings("111", "222"));

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
