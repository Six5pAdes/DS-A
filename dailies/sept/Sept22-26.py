from collections import defaultdict

# mon
''' You are given an array of integers nums and an integer target.
For each number in the array, you can choose to either add or subtract it to a total sum.

For example, if nums = [1, 2], one possible sum would be "+1-2=-1".
If nums=[1,1], there are two different ways to sum the input numbers to get a sum of 0: "+1-1" and "-1+1".
Return the number of different ways that you can build the expression such that the total sum equals target.

Example 1:
Input: nums = [2,2,2], target = 2
Output: 3
Explanation: There are 3 different ways to sum the input numbers to get a sum of 2.
+2 +2 -2 = 2
+2 -2 +2 = 2
-2 +2 +2 = 2
'''

# time & space: O(n * m)

def targetSum(nums, target):
    n = len(nums)
    dp = [defaultdict(int) for _ in range(n + 1)]
    dp[0][0] = 1

    for i in range(n):
        for total, count in dp[i].items():
            dp[i + 1][total + nums[i]] += count
            dp[i + 1][total - nums[i]] += count

    return dp[n][target]

print(targetSum([2,2,2], 2))

# tues
'''
'''

# time: O()

# def ____:
#     return

# print()

# weds
'''
'''

# time: O()

# def ____:
#     return

# print()

# thurs
'''
'''

# time: O()

# def ____:
#     return

# print()

# fri
'''
'''

# time: O()

# def ____:
#     return

# print()
