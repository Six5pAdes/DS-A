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

// const k = 2, w = 0, profits = [1, 2, 3], capital = [0, 1, 1];
// console.log(findMaximizedCapital(k, w, profits, capital)); // 4
// const k2 = 3, w2 = 0, profits2 = [1, 2, 3], capital2 = [0, 1, 2];
// console.log(findMaximizedCapital(k2, w2, profits2, capital2)); // 6

// Wed
/* You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
Define a pair (u, v) which consists of one element from the first array and one element from the second array.
Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

Example 1:
Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

Example 2:
Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
*/

var kSmallestPairs = function (nums1, nums2, k) {
    const pairs = [];
    for (const num1 of nums1) {
        for (const num2 of nums2) {
            pairs.push([num1, num2]);
        }
    }

    pairs.sort((a, b) => a[0] + a[1] - b[0] - b[1]);

    return pairs.slice(0, k);
};

// const nums1 = [1, 7, 11], nums2 = [2, 4, 6], k = 3;
// console.log(kSmallestPairs(nums1, nums2, k)); // [[1,2],[1,4],[1,6]]
// const nums21 = [1, 1, 2], nums22 = [1, 2, 3], k2 = 2;
// console.log(kSmallestPairs(nums21, nums22, k2)); // [[1,1],[1,1]]

// Thurs
/* The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.


Example 1:
Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]
Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
*/

var MedianFinder = function () {
    this.arr = [];
};

MedianFinder.prototype.addNum = function (num) {
    const search = n => {
        let l = 0;
        let r = this.arr.length;

        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (n > this.arr[mid]) {
                l = mid + 1;
            } else r = mid;
        }

        this.arr.splice(l, 0, n);
    }

    if (this.arr.length === 0) {
        this.arr.push(num);
    } else {
        search(num);
    }
};

MedianFinder.prototype.findMedian = function () {
    const m = Math.floor(this.arr.length / 2);
    return this.arr.length % 2 === 0 ? (this.arr[m - 1] + this.arr[m]) / 2 : this.arr[m];
};

// const medianFinder = new MedianFinder();
// console.log(medianFinder.findMedian()); // null
// console.log(medianFinder.addNum(1)); // null
// console.log(medianFinder.addNum(2)); // null
// console.log(medianFinder.findMedian()); // 1.5
// console.log(medianFinder.addNum(3)); // null
// console.log(medianFinder.findMedian()); // 2.0

// Fri
/* Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
*/

var addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry) {
        const sum = (i >= 0 ? parseInt(a[i--]) : 0) + (j >= 0 ? parseInt(b[j--]) : 0) + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
};

const a = "11", b = "1";
console.log(addBinary(a, b)); // "100"
const a2 = "1010", b2 = "1011";
console.log(addBinary(a2, b2)); // "10101"
