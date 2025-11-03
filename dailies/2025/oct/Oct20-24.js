// mon
/* You are given a 2D integer array intervals, where intervals[i] = [left_i, right_i] represents the ith interval starting at left_i and ending at right_i (inclusive).
You are also given an integer array of query points queries. The result of query[j] is the length of the shortest interval i such that left_i <= queries[j] <= right_i. If no such interval exists, the result of this query is -1.
Return an array output where output[j] is the result of query[j].
Note: The length of an interval is calculated as right_i - left_i + 1.

Example 1:
Input: intervals = [[1,3],[2,3],[3,7],[6,6]], queries = [2,3,1,7,6,8]
Output: [2,2,3,5,1,-1]

Explanation:
Query = 2: The interval [2,3] is the smallest one containing 2, it's length is 2.
Query = 3: The interval [2,3] is the smallest one containing 3, it's length is 2.
Query = 1: The interval [1,3] is the smallest one containing 1, it's length is 3.
Query = 7: The interval [3,7] is the smallest one containing 7, it's length is 5.
Query = 6: The interval [6,6] is the smallest one containing 6, it's length is 1.
Query = 8: There is no interval containing 8.
*/

// time: O(n log n + m log m), space: O(n + m)

function shortestInterval(intervals, queries) {
  intervals.sort((a, b) => a[0] - b[0]);
  const minHeap = new MinPriorityQueue((entry) => entry[0]);
  const res = {};
  let i = 0;

  const sortedQueries = [...queries].sort((a, b) => a - b);

  for (const q of sortedQueries) {
    while (i < intervals.length && intervals[i][0] <= q) {
      const [l, r] = intervals[i];
      minHeap.enqueue([r - l + 1, r]);
      i += 1;
    }

    while (!minHeap.isEmpty() && minHeap.front()[1] < q) {
      minHeap.dequeue();
    }

    res[q] = minHeap.isEmpty() ? -1 : minHeap.front()[0];
  }

  return queries.map((q) => res[q]);
}

// console.log(
//   shortestInterval(
//     [
//       [1, 3],
//       [2, 3],
//       [3, 7],
//       [6, 6],
//     ],
//     [2, 3, 1, 7, 6, 8]
//   )
// );

// tues
/* Given a square n x n matrix of integers matrix, rotate it by 90 degrees clockwise.
You must rotate the matrix in-place. Do not allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = [
  [1,2],
  [3,4]
]
Output: [
  [3,1],
  [4,2]
]

Example 2:
Input: matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
Output: [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
*/

// time: O(n ^ 2), space: O(1)

function rotate(matrix) {
  /* let l = 0;
  let r = matrix.length - 1;

  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      const top = l;
      const bot = r;

      const topLeft = matrix[top][l + 1];
      matrix[top][l + i] = matrix[bot - i][l];
      matrix[bot - i][l] = matrix[bot][r - i];
      matrix[bot][r - i] = matrix[top + i][r];
      matrix[top + i][r] = topLeft;
    }

    r--;
    l++;
  } */

  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

/* console.log(
  rotate([
    [1, 2],
    [3, 4],
  ])
);
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
*/

// weds
/* Given an m x n matrix of integers matrix, return a list of all elements within the matrix in spiral order.

Example 1:
Input: matrix = [[1,2],[3,4]]
Output: [1,2,4,3]

Example 2:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 3:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

// time: O(m * n), space: O(1)

function spiralOrder(matrix) {
  const res = [];
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1]);
    }
    right--;

    if (!(left < right && top < bottom)) {
      break;
    }

    for (let i = right - 1; i >= left; i--) {
      res.push(matrix[bottom - 1][i]);
    }
    bottom--;

    for (let i = bottom - 1; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }

  return res;
}

/* console.log(
  spiralOrder([
    [1, 2],
    [3, 4],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
*/

// thurs
/* Given an m x n matrix of integers matrix, if an element is 0, set its entire row and column to 0's.
You must update the matrix in-place.
Follow up: Could you solve it using O(1) space?

Example 1:
Input: matrix = [
  [0,1],
  [1,0]
]
Output: [
  [0,0],
  [0,0]
]

Example 2:
Input: matrix = [
  [1,2,3],
  [4,0,5],
  [6,7,8]
]
Output: [
  [1,0,3],
  [0,0,0],
  [6,0,8]
]
 */

// time: O(m * n), space: O(1)

function setZeroes(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let rowZ = false;

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (matrix[r][c] == 0) {
        matrix[0][c] = 0;

        if (r > 0) {
          matrix[r][0] = 0;
        } else {
          rowZ = true;
        }
      }
    }
  }

  for (let r = 1; r < row; r++) {
    for (let c = 1; c < col; c++) {
      if (matrix[0][c] == 0 || matrix[r][0] == 0) {
        matrix[r][c] = 0;
      }
    }
  }

  if (matrix[0][0] == 0) {
    for (let r = 0; r < row; r++) {
      matrix[r][0] = 0;
    }
  }

  if (rowZ) {
    for (let c = 0; c < col; c++) {
      matrix[0][c] = 0;
    }
  }
}

/* console.log(
  setZeroes([
    [0, 1],
    [1, 0],
  ])
);
console.log(
  setZeroes([
    [1, 2, 3],
    [4, 0, 5],
    [6, 7, 8],
  ])
);
*/

// fri
/* A non-cyclical number is an integer defined by the following algorithm:

Given a positive integer, replace it with the sum of the squares of its digits.
Repeat the above step until the number equals 1, or it loops infinitely in a cycle which does not include 1.
If it stops at 1, then the number is a non-cyclical number.
Given a positive integer n, return true if it is a non-cyclical number, otherwise return false.

Example 1:
Input: n = 100
Output: true
Explanation: 1^2 + 0^2 + 0^2 = 1

Example 2:
Input: n = 101
Output: false
Explanation:
1^2 + 0^2 + 1^2 = 2
2^2 = 4
4^2 = 16
1^2 + 6^2 = 37
3^2 + 7^2 = 58
5^2 + 8^2 = 89
8^2 + 9^2 = 145
1^2 + 4^2 + 5^2 = 42
4^2 + 2^2 = 20
2^2 + 0^2 = 4 (This number has already been seen)
 */

// time & space: O(log n)

function isHappy(n) {
  const visited = new Set();

  while (n !== 1 && !visited.has(n)) {
    visited.add(n);
    n = sumOfSquares(n);
  }

  return n === 1;
}

function sumOfSquares(n) {
  let total = 0;

  while (n > 0) {
    let digit = n % 10;
    total += digit * digit;
    n = Math.floor(n / 10);
  }

  return total;
}

console.log(isHappy(100));
console.log(isHappy(101));
