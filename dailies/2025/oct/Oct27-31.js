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

// console.log(multiplyStrings("3", "4"));
// console.log(multiplyStrings("111", "222"));

// thurs
/* You are given a stream of points consisting of x-y coordinates on a 2-D plane. Points can be added and queried as follows:
Add - new points can be added to the stream into a data structure. Duplicate points are allowed and should be treated as separate points.
Query - Given a single query point, count the number of ways to choose three additional points from the data structure such that the three points and the query point form a square. The square must have all sides parallel to the x-axis and y-axis, i.e. no diagonal squares are allowed. Recall that a square must have four equal sides.

Implement the CountSquares class:
CountSquares() Initializes the object.
void add(int[] point) Adds a new point point = [x, y].
int count(int[] point) Counts the number of ways to form valid squares with point point = [x, y] as described above.

Example 1:
Input:
["CountSquares", "add", [[1, 1]], "add", [[2, 2]], "add", [[1, 2]], "count", [[2, 1]], "count", [[3, 3]], "add", [[2, 2]], "count", [[2, 1]]]

Output:
[null, null, null, null, 1, 0, null, 2]

Explanation:
CountSquares countSquares = new CountSquares();
countSquares.add([1, 1]);
countSquares.add([2, 2]);
countSquares.add([1, 2]);

countSquares.count([2, 1]);   // return 1.
countSquares.count([3, 3]);   // return 0.
countSquares.add([2, 2]);     // Duplicate points are allowed.
countSquares.count([2, 1]);   // return 2. */

// time: O(1) for add(), O(n) for count(); space: O(n)

class CountSquares {
  constructor() {
    this.points = new Map();
    this.pts = [];
  }

  add(point) {
    const p = point.join(",");
    this.points.set(p, (this.points.get(p) || 0) + 1);
    this.pts.push(point);
  }

  count(point) {
    let res = 0;
    const [px, py] = point;

    for (const [x, y] of this.pts) {
      if (Math.abs(py - y) !== Math.abs(px - x) || x === px || y === py)
        continue;

      res +=
        (this.points.get(`${x},${py}`) || 0) *
        (this.points.get(`${px},${y}`) || 0);
    }

    return res;
  }
}

// console.log(CountSquares.add([1, 1]));
// console.log(CountSquares.add([2, 2]));
// console.log(CountSquares.add([1, 2]));
// console.log(CountSquares.count([2, 1]));
// console.log(CountSquares.count([3, 3]));
// console.log(CountSquares.add([2, 2]));
// console.log(CountSquares.count([2, 1]));

// fri
/* You are given a non-empty array of integers nums. Every integer appears twice except for one. Return the integer that appears only once.
You must implement a solution with O(n) runtime complexity and use only O(1) extra space.

Example 1:
Input: nums = [3,2,3]
Output: 2

Example 2:
Input: nums = [7,6,6,7,8]
Output: 8
*/

// time: O(n), space: O(1)

function singleNumber(nums) {
  let res = 0;
  for (const num of nums) {
    res ^= num;
  }

  return res;
}

console.log(singleNumber([3, 2, 3]));
console.log(singleNumber([7, 6, 6, 7, 8]));
