// Mon
/* Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

var findKthLargest = function (nums, k) {
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);

    const freq = new Array(maxVal - minVal + 1).fill(0);

    for (const num of nums) {
        freq[num - minVal]++;
    }

    let remains = k;
    for (let i = freq.length - 1; i >= 0; i--) {
        remains -= freq[i];
        if (remains <= 0) {
            return i + minVal;
        }
    }
};

// nums = [3,2,1,5,6,4], k = 2
// console.log(findKthLargest(nums, k)); // 5
// nums = [3,2,3,1,2,4,5,5,6], k = 4
// console.log(findKthLargest(nums, k)); // 4

// Tues
/* Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.
You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.
Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.
Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.
The answer is guaranteed to fit in a 32-bit signed integer.

Example 1:
Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
Output: 4
Explanation: Since your initial capital is 0, you can only start the project indexed 0.
After finishing it you will obtain profit 1 and your capital becomes 1.
With capital 1, you can either start the project indexed 1 or the project indexed 2.
Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.

Example 2:
Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
Output: 6
*/

var findMaximizedCapital = function (k, w, profits, capital) {
    const n = profits.length;
    const done = new Array(n).fill(false);

    for (let i = 0; i < k; i++) {
        let projIdx = -1;

        for (let j = 0; j < n; j++) {
            if (capital[j] <= w && !done[j]) {
                if (projIdx === -1 || profits[j] > profits[projIdx]) {
                    projIdx = j;
                }
            }
        }

        if (projIdx === -1) {
            return w;
        }

        w += profits[projIdx];
        done[projIdx] = true;
    }

    return w;
};

const k = 2, w = 0, profits = [1, 2, 3], capital = [0, 1, 1];
console.log(findMaximizedCapital(k, w, profits, capital)); // 4
const k2 = 3, w2 = 0, profits2 = [1, 2, 3], capital2 = [0, 1, 2];
console.log(findMaximizedCapital(k2, w2, profits2, capital2)); // 6

// Wed

// Thurs

// Fri
