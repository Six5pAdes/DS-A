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

// time: O(n log(n))

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

console.log(sortArray([10, 9, 1, 1, 1, 2, 3, 1]));
console.log(sortArray([5, 10, 2, 1, 3]));

// tues
/* */

// time: O()

function ____() {}

// console.log();

// weds
/* */

// time: O()

function ____() {}

console.log();

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
