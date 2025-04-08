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

// console.log(hasDuplicate([1, 2, 3, 4]))
// console.log(hasDuplicate([1, 2, 3, 3]))

// tues
/*Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
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

console.log(isAnagrams("racecar", "carrace"))
console.log(isAnagrams("jar", "jam"))
