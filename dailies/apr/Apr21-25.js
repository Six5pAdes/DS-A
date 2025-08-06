// mon
/* Given an array of integers numbers that is sorted in non-decreasing order.
Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
There will always be exactly one valid solution.

Your solution must use O(1) additional space.

Example 1:
Input: numbers = [1,2,3,4], target = 3
Output: [1,2]
Explanation:
The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].
*/

function twoSum(numbers, target) {
    let l = 0,
        r = numbers.length - 1;

    while (l < r) {
        let curr = numbers[l] + numbers[r];

        if (curr > target) {
            r--;
        } else if (curr < target) {
            l++;
        } else {
            return [l + 1, r + 1];
        }
    }

    return [];
}

// Time: O(n), Space: O(1)

// console.log(twoSum([1, 2, 3, 4], 3))

// tues
/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;

                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
            }
        }
    }
    return res;
}

// Time: O(n^2), Space: O(1)

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0]));

// weds
/* You are given an integer array heights where heights[i] represents the height of the ith bar.
You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Example 1:
Input: height = [1,7,2,5,4,7,3,6]
Output: 36

Example 2:
Input: height = [2,2,2]
Output: 4
*/

function maxArea(heights) {
    let l = 0
    let r = heights.length - 1
    let res = 0;

    while (l < r) {
        const area = Math.min(heights[l], heights[r]) * (r - l)
        res = Math.max(res, area)

        if (heights[l] <= heights[r]) {
            l++
        } else r--
    }

    return res
}

// Time: O(n), Space: O(1)

// console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6]))
// console.log(maxArea([2, 2, 2]))

// thurs
/* You are given an array non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.
Return the maximum area of water that can be trapped between the bars.

Example 1:
Input: height = [0,2,0,3,1,0,1,3,2,1]
Output: 9
*/

function waterTrapped(height) {
    if (!height || height.length === 0) return 0

    let l = 0
    let r = height.length - 1
    let lMax = height[l], rMax = height[r]
    let res = 0;

    while (l < r) {
        if (lMax < rMax) {
            l++
            lMax = Math.max(lMax, height[l])
            res += lMax - height[l]
        } else {
            r--
            rMax = Math.max(rMax, height[r])
            res += rMax - height[r]
        }
    }

    return res
}

// Time: O(n), Space: O(n)

// console.log(waterTrapped([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]))

// fri
/* You are given an integer array prices where prices[i] is the price of ItCoin on the ith day.
You may choose a single day to buy one ItCoin and choose a different day in the future to sell it.
Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example 1:
Input: prices = [10,1,5,6,7,1]
Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:
Input: prices = [10,8,7,5,2]
Output: 0
Explanation: No profitable transactions can be made, thus the max profit is 0.
*/

function maxProfit(prices) {
    let l = 0, r = 1
    let max = 0

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l]
            max = Math.max(max, profit)
        } else l = r

        r++
    }

    return max
}

// Time: O(n), Space: O(1)

console.log(maxProfit([10, 1, 5, 6, 7, 1]))
console.log(maxProfit([10, 8, 7, 5, 2]))
