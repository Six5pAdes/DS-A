// mon
/* Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

Input: points = [[1,1],[2,2],[3,3]]
Output: 3

Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
*/

function maxPoints(points) {
    let max = 0;

    for (const x of points) {
        const slopes = new Map();

        for (const y of points) {
            if (x === y) continue;
            let slope = Infinity;

            if (y[0] - x[0] !== 0) {
                slope = (y[1] - x[1]) / (y[0] - x[0])
            }

            if (slopes.has(slope)) {
                slopes.set(slope, slopes.get(slope) + 1)
            } else {
                slopes.set(slope, 1)
            }

            max = Math.max(max, slopes.get(slope))
        }
    }

    return max + 1;
}

// Time: O(n^2), Space: O(n)

// console.log(maxPoints([[1, 1], [2, 2], [3, 3]]))
// console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]))

// tues
/* You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

function climbStairs(n) {
    if (n <= 3) return n;

    let pre1 = 3;
    let pre2 = 2;
    let curr = 0;

    for (let i = 3; i < n; i++) {
        curr = pre1 + pre2;
        pre2 = pre1;
        pre1 = curr;
    }

    return curr;
}

// Time: O(n), Space: O(1)

// console.log(climbStairs(2))
// console.log(climbStairs(3))

// weds
/* You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/

function robber(nums) {
    let lastRob = 0
    let totalRob = 0;

    for (const stole of nums) {
        let temp = Math.max(totalRob, lastRob + stole);
        lastRob = totalRob;
        totalRob = temp;
    }

    return totalRob
}

// Time: O(n), Space: O(1)

console.log(robber([1, 2, 3, 1]))
console.log(robber([2, 7, 9, 3, 1]))
// thurs

// fri
