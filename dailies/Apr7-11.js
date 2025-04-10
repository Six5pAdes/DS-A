// mon
/* Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false
*/

function hasDuplicate(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true;
    }

    return false;
};

// Time: O(n log n), Space: O(1)/O(n)

// console.log(hasDuplicate([1, 2, 3, 4]))
// console.log(hasDuplicate([1, 2, 3, 3]))

// tues
/* Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"
Output: true

Example 2:
Input: s = "jar", t = "jam"
Output: false
*/

function isAnagrams(s, t) {
    if (s.length !== t.length) return false;

    const sLetters = s.split('').sort().join('')
    const tLetters = t.split('').sort().join('')

    return sLetters === tLetters
}

// Time: O(n log n + m log m), Space: O(1)/O(n + m)

// console.log(isAnagrams("racecar", "carrace"))
// console.log(isAnagrams("jar", "jam"))

// weds
/* Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
Return the answer with the smaller index first.

Example 1:
Input:
nums = [3,4,5,6], target = 7
Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:
Input: nums = [4,5,6], target = 10
Output: [0,2]

Example 3:
Input: nums = [5,5], target = 10
Output: [0,1]
*/

function twoSum(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    return []
}

// Time: O(n^2), Space: O(1)

// console.log(twoSum([3, 4, 5, 6], 7))
// console.log(twoSum([4, 5, 6], 10))
// console.log(twoSum([5, 5], 10))
// console.log(twoSum([2, 4, 5, 6], 20))

// thurs
/* Given an array of strings strs,
group all anagrams together into sublists. You may return the output in any order.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Example 2:
Input: strs = ["x"]
Output: [["x"]]

Example 3:
Input: strs = [""]
Output: [[""]]
*/

function grpAnagrams(strs) {
    let res = {}
    for (let s of strs) {
        const sorted = s.split('').sort().join()

        if (!res[sorted]) {
            res[sorted] = []
        }
        res[sorted].push(s)
    }

    return Object.values(res)
}

// Time: O(m * n log n), Space: O(m * n)

console.log(grpAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))
console.log(grpAnagrams(["x"]))
console.log(grpAnagrams([""]))
