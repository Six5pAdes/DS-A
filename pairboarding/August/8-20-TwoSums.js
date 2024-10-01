/*
Two Integer Sum
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
Return the answer with the smaller index first.

Example 1:
Input: nums = [3, 4, 5, 6], target = 7
Output: [0, 1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:
Input: nums = [4, 5, 6], target = 10
Output: [0, 2]

Example 3:
Input: nums = [5, 5], target = 10
Output: [0,1]

Constraints:
2 <= nums.length <= 1000
-10,000,000 <= nums[i] <= 10,000,000
-10,000,000 <= target <= 10,000,000
*/

const twoSums = function (nums, target) {
  /*
  // sol 1
  // initialize variable for storing nums
  let arr = new Map();

  //   for loop to cycle through nums array
  for (let i = 0; i < nums.length; i++) {
    // num in array
    let num = nums[i];
    //   var for target minus num
    let diff = target - num;

    // check if diff exists in map
    // if target
    if (arr.has(diff)) {
      // var for compliment num
      let complement = arr.get(diff);
      // return new num array of two nums
      return [i, complement];
    }
    arr.set(num, i);
  }
    */

  // sol 2
  let sorted = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    let sum = sorted[left] + sorted[right];
    if (sum === target) {
      let leftIndex = nums.indexOf(sorted[left]);
      let rightIndex = nums.lastIndexOf(sorted[right]);
      return [leftIndex, rightIndex];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(twoSums([3, 4, 5, 6], 7));
