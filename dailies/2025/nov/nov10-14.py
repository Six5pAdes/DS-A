# mon
'''You are given an array of strings strs. Return the longest common prefix of all the strings.
If there is no longest common prefix, return an empty string "".

Example 1:
Input: strs = ["bat","bag","bank","band"]
Output: "ba"

Example 2:
Input: strs = ["dance","dag","danger","damage"]
Output: "da"

Example 3:
Input: strs = ["neet","feet"]
Output: ""
'''

# time: O(n * m), space: O(1)

def longestCommonPrefix(strs):
    for i in range(len(strs[0])):
        for s in strs:
            if i == len(s) or s[i] != strs[0][i]:
                return s[:i]

    return strs[0]

# print(longestCommonPrefix(["bat","bag","bank","band"]))
# print(longestCommonPrefix(["dance","dag","danger","damage"]))
# print(longestCommonPrefix(["neet","feet"]))

# tues
'''You are given an integer array nums and an integer val. Your task is to remove all occurrences of val from nums in-place.
After removing all occurrences of val, return the number of remaining elements, say k, such that the first k elements of nums do not contain val.

Note:
    The order of the elements which are not equal to val does not matter.
    It is not necessary to consider elements beyond the first k positions of the array.
    To be accepted, the first k elements of nums must contain only elements not equal to val.
Return k as the final result.

Example 1:
Input: nums = [1,1,2,3,4], val = 1
Output: [2,3,4]
Explanation: You should return k = 3 as we have 3 elements which are not equal to val = 1.

Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: [0,1,3,0,4]
Explanation: You should return k = 5 as we have 5 elements which are not equal to val = 2.
'''

# time: O()

def removeElement(nums, val):
    k = 0

    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    return k

# print(removeElement([1,1,2,3,4], 1))
# print(removeElement([0,1,2,2,3,0,4,2], 2))

# weds
'''Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times in the array. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [5,5,1,1,1,5,5]
Output: 5

Example 2:
Input: nums = [2,2,2]
Output: 2
'''

# time & space: O(n)

def majority(nums):
    res = count = 0

    for num in nums:
        if count == 0:
            res = num

        count += (1 if num == res else -1)

    return res

print(majority([5,5,1,1,1,5,5]))
print(majority([2,2,2]))

# thurs
''''''

# time: O()

def ____():
    return

# print()

# fri
''''''

# time: O()

def ____():
    return

# print()
