/*
You are given a 2D array of random integers. Your goal is to calculate the checksum of these integers. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all these differences.

Examples:

[
 [5, 1, 9, 5], The first row's largest and smallest values are 9 and 1, and their difference is 8
 [7, 3], The second row's largest and smallest values are 7 and 3, and their difference is 4
 [2, 6, 8] The third row's difference is 6
]
The total checksum of this input would be 8 + 4 + 6 = 18
This method should take O(N * K) time, where N is the number if integers in each row, and K is the number of rows. It should take O(1) extra space
*/

function checksum(arrays) {
  // initialize checksum
  let checksum = 0;

  // iterate through 2d array
  arrays.forEach((array) => {
    // initialize min and max overall
    let min = array[0],
      max = array[0];

    // iterate through each array
    array.forEach((int) => {
      // initialize min and max in each one
      if (max < int) max = int;
      if (min > int) min = int;
    });

    // find the difference between min and max combos
    let diff = max - min;

    // increment differences together into checksum
    checksum += diff;
  });

  return checksum;
}

const arrays = [
  [5, 1, 9, 5],
  [7, 3],
  [2, 6, 8],
];
console.log("overarching sum: ", checksum(arrays));
