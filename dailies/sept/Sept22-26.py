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

# print(targetSum([2,2,2], 2))

# tues
''' You are given three strings s1, s2, and s3. Return true if s3 is formed by interleaving s1 and s2 together or false otherwise.
Interleaving two strings s and t is done by dividing s and t into n and m substrings respectively, where the following conditions are met

|n - m| <= 1, i.e. the difference between the number of substrings of s and t is at most 1.
s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
Interleaving s and t is s1 + t1 + s2 + t2 + ... or t1 + s1 + t2 + s2 + ...

You may assume that s1, s2 and s3 consist of lowercase English letters.

Example 1:
Input: s1 = "aaaa", s2 = "bbbb", s3 = "aabbbbaa"
Output: true
Explanation: We can split s1 into ["aa", "aa"], s2 can remain as "bbbb" and s3 is formed by interleaving ["aa", "aa"] and "bbbb".

Example 2:
Input: s1 = "", s2 = "", s3 = ""
Output: true

Example 3:
Input: s1 = "abc", s2 = "xyz", s3 = "abxzcy"
Output: false
Explanation: We can't split s3 into ["ab", "xz", "cy"] as the order of characters is not maintained.
'''

# time: O(n * m)

def isInterleave(s1, s2, s3):
    n, m = len(s1), len(s2)
    if n + m != len(s3):
        return False

    dp = [[False] * (m + 1) for _ in range(n + 1)]
    dp[0][0] = True

    for i in range(n):
        dp[i + 1][0] = dp[i][0] and s1[i] == s3[i]

    for j in range(m):
        dp[0][j + 1] = dp[0][j] and s2[j] == s3[j]

    for i in range(n):
        for j in range(m):
            dp[i + 1][j + 1] = (dp[i][j + 1] and s1[i] == s3[i + j + 1]) or (dp[i + 1][j] and s2[j] == s3[i + j + 1])

    return dp[n][m]

print(isInterleave("aaaa", "bbbb", "aabbbbaa"))
print(isInterleave("", "", ""))
print(isInterleave("abc", "xyz", "abxzcy"))

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
