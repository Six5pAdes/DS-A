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

# print(isInterleave("aaaa", "bbbb", "aabbbbaa"))
# print(isInterleave("", "", ""))
# print(isInterleave("abc", "xyz", "abxzcy"))

# weds
''' You are given a 2-D grid of integers matrix, where each integer is greater than or equal to 0.
Return the length of the longest strictly increasing path within matrix.
From each cell within the path, you can move either horizontally or vertically. You may not move diagonally.

Example 1:
Input: matrix = [[5,5,3],[2,3,6],[1,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 3, 6] or [1, 2, 3, 5].

Example 2:
Input: matrix = [[1,2,3],[2,1,4],[7,6,5]]
Output: 7
Explanation: The longest increasing path is [1, 2, 3, 4, 5, 6, 7].
'''

# time & space: O(m * n)

def longestIncreasingPath(matrix):
    m, n = len(matrix), len(matrix[0])
    dp = [[0] * n for _ in range(m)]
    directs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    def dfs(i, j):
        if dp[i][j] != 0:
            return dp[i][j]

        dp[i][j] = 1
        for di, dj in directs:
            ni, nj = i + di, j + dj
            if 0 <= ni < m and 0 <= nj < n and matrix[ni][nj] > matrix[i][j]:
                dp[i][j] = max(dp[i][j], 1 + dfs(ni, nj))

        return dp[i][j]

    for i in range(m):
        for j in range(n):
            dfs(i, j)

    return max(max(row) for row in dp)

# print(longestIncreasingPath([[5,5,3],[2,3,6],[1,1,1]]))
# print(longestIncreasingPath([[1,2,3],[2,1,4],[7,6,5]]))

# thurs
''' You are given two strings s and t, both consisting of english letters.
Return the number of distinct subsequences of s which are equal to t.

Example 1:
Input: s = "caaat", t = "cat"
Output: 3
Explanation: There are 3 ways you can generate "cat" from s.
(c)aa(at)
(c)a(a)a(t)
(ca)aa(t)

Example 2:
Input: s = "xxyxy", t = "xy"
Output: 5
Explanation: There are 5 ways you can generate "xy" from s.
(x)x(y)xy
(x)xyx(y)
x(x)(y)xy
x(x)yx(y)
xxy(x)(y)
'''

# time & space: O(n * m)

def numDistrict(s,t):
    m, n = len(s), len(t)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m + 1):
        dp[i][n] = 1

    for i in range(m - 1, -1, -1):
        for j in range(n - 1, -1, -1):
            dp[i][j] = dp[i + 1][j]
            if s[i] == t[j]:
                dp[i][j] += dp[i + 1][j + 1]

    return dp[0][0]

print(numDistrict("caaat", "cat"))
print(numDistrict("xxyxy", "xy"))

# fri
'''
'''

# time: O()

# def ____:
#     return

# print()
