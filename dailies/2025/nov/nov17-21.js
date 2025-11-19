// mon
/* You are given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in O(n log(n)) time complexity and with the smallest space complexity possible.

Example 1:
Input: nums = [10,9,1,1,1,2,3,1]
Output: [1,1,1,1,2,3,9,10]

Example 2:
Input: nums = [5,10,2,1,3]
Output: [1,2,3,5,10]
*/

// time: O(n log(n)), space: O(n)

class Solution {
  sortArray(nums) {
    this.mergeSort(nums, 0, nums.length - 1);
    return nums;
  }

  mergeSort(arr, l, r) {
    if (r <= l) return;
    let m = Math.floor((l + r) / 2);
    this.mergeSort(arr, l, m);
    this.mergeSort(arr, m + 1, r);
    this.merge(arr, l, m, r);
  }

  merge(arr, l, m, r) {
    let temp = [];
    let i = l,
      j = m + 1;

    while (i <= m && j <= r) {
      if (arr[i] <= arr[j]) {
        temp.push(arr[i++]);
      } else temp.push(arr[j++]);
    }

    while (i <= m) temp.push(arr[i++]);
    while (j <= r) temp.push(arr[j++]);

    for (let i = l; i <= r; i++) {
      arr[i] = temp[i - l];
    }
  }
}

// console.log(sortArray([10, 9, 1, 1, 1, 2, 3, 1]));
// console.log(sortArray([5, 10, 2, 1, 3]));

// tues
/* You are given an array nums consisting of n elements where each element is an integer representing a color:
  0 represents red
  1 represents white
  2 represents blue

Your task is to sort the array in-place such that elements of the same color are grouped together and arranged in the order: red (0), white (1), and then blue (2).
You must not use any built-in sorting functions to solve this problem.

Example 1:
Input: nums = [1,0,1,2]
Output: [0,1,1,2]

Example 2:
Input: nums = [2,1,0]
Output: [0,1,2]

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/

// time: O(n), space: O(1)

function sortColors(nums) {
  let i = 0,
    l = 0,
    r = nums.length - 1;

  while (i <= r) {
    if (nums[i] == 0) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      l++;
    } else if (nums[i] == 2) {
      [nums[i], nums[r]] = [nums[r], nums[i]];
      r--;
      i--;
    }

    i++;
  }

  return nums;
}

// console.log(sortColors([1, 0, 1, 2]));
// console.log(sortColors([2, 1, 0]));

// weds
/* You are given a 2D matrix matrix, handle multiple queries of the following type:
Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Implement the NumMatrix class:
NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
You must design an algorithm where sumRegion works on O(1) time complexity.

Example 1:
Input: ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
Output: [null, 8, 11, 12]

Explanation:
NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)
*/

// time: O(n), space: O(m * n)

class NumMatrix {
  constructor(matrix) {
    this.prefixSum = Array.from({ length: matrix.length }, () =>
      Array(matrix[0].length).fill(0)
    );

    for (let r = 0; r < matrix.length; r++) {
      this.prefixSum[r][0] = matrix[r][0];
      for (let c = 1; c < matrix[0].length; c++) {
        this.prefixSum[r][c] = this.prefixSum[r][c - 1] + matrix[r][c];
      }
    }
  }

  sumRegion(row1, col1, row2, col2) {
    let res = 0;
    for (let r = row1; r <= row2; r++) {
      if (col1 > 0) {
        res += this.prefixSum[r][col2] - this.prefixSum[r][col1 - 1];
      } else {
        res += this.prefixSum[r][col2];
      }
    }

    return res;
  }
}

const demoMatrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];
const numMatrix = new NumMatrix(demoMatrix);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // 8 (red rectangle)
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // 11 (green rectangle)
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // 12 (blue rectangle)

// thurs
/* */

// time: O()

function ____() {}

// console.log();

// fri
/* */

// time: O()

function ____() {}

// console.log();
