/*
The magic index of an array occurs when the element at that index is the same as the index itself. More simply, the magic index is when array[i] === i. Write a recursive method, findMagicIndex, that takes in an array and returns the index that is the magic index. The method must take O(logN) time and O(logN) space.

Constraints:

The array is sorted
The array may have multiple magic indices. If this is the case, return the leftmost occurrence.
The elements in the array don't have to be distinct
The magic index doesn't always exist; return -1 if it doesn't exist
The array may have negative values

Examples:

a[i]  -4, -2, 2, 6, 6, 6, 6, 10
i      0,  1, 2, 3, 4, 5, 6, 7
Result: 2

a[i]  -4 -2  1  6  6  6  6 10
  i    0  1  2  3  4  5  6  7
Result: 6

a[i]  -4 -2  1  6  6  6  7 10
  i    0  1  2  3  4  5  6  7
Result: -1
If your partner gets stuck, ask them: What an algorithm can run in O(logN) time, what does that generally mean we must be doing?

The answer we are looking for here is splitting it in half

*/

function findMagicIndex(arr, start, end) {
  // let start = arr[0];
  // let end = arr[arr.length - 1];

  // console.log("We start here:", start);
  // console.log("This is the end:", end);

  // if magic index doesn't exist, return -1
  if (end < start || start < 0 || end >= arr.length) return -1;

  //   initialize "let mid" where mid = (start + end) / 2
  const mid = Math.floor((start + end) / 2);
  //   if mid === arr[mid] return mid
  if (mid === arr[mid]) return mid;

  //   utilize recursion methods for left and right
  // find left, where left = (arr, start, left)
  const leftEnd = Math.min(mid - 1, arr[mid]);
  const leftResult = findMagicIndex(arr, start, leftEnd);
  //   if left != -1, return left
  if (leftResult !== -1) return leftResult;

  // find right, where right = (arr, right, end)
  const rightEnd = Math.max(mid + 1, arr[mid]);
  const rightResult = findMagicIndex(arr, rightEnd, end);
  //   if right != -1, return right
  if (rightResult !== -1) return rightResult;

  // return -1 regardless
  return -1;
}

console.log(findMagicIndex([-4, -2, 2, 6, 6, 6, 6, 10], 0, 7)); // 2
console.log(findMagicIndex([-4, -2, 1, 6, 6, 6, 6, 10], 0, 7));
// console.log(findMagicIndex([-7, -2, 1, 2, 5, 6, 7, 13, 14, 59], 0, 9));

/*
function findMissingNumber(array, upperBound, lowerBound) {
  // Iterate through array to find the sum of the numbers
  let sumOfIntegers = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfIntegers += array[i];
  }

  // Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
  // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
  // N is the upper bound and M is the lower bound

  const upperLimitSum = (upperBound * (upperBound + 1)) / 2;
  const lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

  const theoreticalSum = upperLimitSum - lowerLimitSum;

  return theoreticalSum - sumOfIntegers;
}

console.log(findMissingNumber([2, 5, 1, 4, 9, 6, 3, 7], 9, 1)); // 8
*/
