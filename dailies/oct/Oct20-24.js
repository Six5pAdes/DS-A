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

console.log(
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

// weds
/*
 */

// time: O()

function ____() {}

// console.log()

// thurs
/*
 */

// time: O()

function ____() {}

// console.log()

// fri
/*
 */

// time: O()

function ____() {}

// console.log()
