# mon
''' Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:
s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

Note: a + b is the concatenation of strings a and b.

Example 1:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Explanation: One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.

Example 2:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.

Example 3:
Input: s1 = "", s2 = "", s3 = ""
Output: true
'''

def isInterleave(str1, str2, str3):
    s, t, r = len(str1), len(str2), len(str3)
    if s + t != r:
        return False

    dp = [[False] * (t + 1) for _ in range(s + 1)]
    dp[0][0] = True

    for i in range(1, s + 1):
        dp[i][0] = dp[i - 1][0] and str1[i - 1] == str3[i - 1]

    for j in range(1, t + 1):
        dp[0][j] = dp[0][j - 1] and str2[j - 1] == str3[j - 1]

    for i in range(1, s + 1):
        for j in range(1, t + 1):
            dp[i][j] = (dp[i - 1][j] and str1[i - 1] == str3[i + j - 1]) or (dp[i][j - 1] and str2[j - 1] == str3[i + j - 1])

    return dp[-1][-1]

# Time: O(m*n), Space: O(m*n)

# print(isInterleave("aabcc", "dbbca", "aadbbcbcac"))
# print(isInterleave("aabcc", "dbbca", "aadbbbaccc"))
# print(isInterleave("", "", ""))

# tues
''' Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:
Insert a character
Delete a character
Replace a character

Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Example 2:
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
'''

def minDist(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        dp[i][0] = i
    for j in range(1, n + 1):
        dp[0][j] = j

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1

    return dp[m][n]


# Time: O(m*n), Space: O(m*n)

# print(minDist("horse", "ros"))
# print(minDist("intention", "execution"))

# weds
''' You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete at most two transactions.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example 1:
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

Example 2:
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

Example 3:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
'''

def maxProfitIII(prices):
    if not prices: return 0

    buy1, buy2 = float('inf'), float('inf')
    sell1, sell2 = 0, 0

    for price in prices:
        buy1 = min(buy1, price)
        sell1 = max(sell1, price - buy1)
        buy2 = min(buy2, price - sell1)
        sell2 = max(sell2, price - buy2)

    return sell2

# Time: O(n), Space: O(1)

# print(maxProfIII([3,3,5,0,0,3,1,4]))
# print(maxProfIII([1,2,3,4,5]))
# print(maxProfIII([7,6,4,3,1]))

# thurs
''' You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.
Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example 1:
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Example 2:
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
'''

def maxProfitIV(k, prices):
    if k == 0: return 0

    dp = [[1000, 0] for _ in range(k + 1)]

    for price in prices:
        for i in range(1, k + 1):
            dp[i][0] = min(dp[i][0], price - dp[i - 1][1])
            dp[i][1] = max(dp[i][1], price - dp[i][0])

    return dp[k][1]

# Time: O(n * k), Space: O(k)

# print(maxProfitIV(2, [2,4,1]))
# print(maxProfitIV(2, [3,2,6,5,0,3]))

# fri
''' Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example 1:
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4

Example 2:
Input: matrix = [["0","1"],["1","0"]]
Output: 1

Example 3:
Input: matrix = [["0"]]
Output: 0
'''

def largestSqr(matrix):
    if matrix is None or len(matrix) < 1: return 0

    row = len(matrix)
    col = len(matrix[0])
    dp = [[0] * (col + 1) for _ in range(row + 1)]
    max_side = 0

    for r in range(row):
        for c in range(col):
            if matrix[r][c] == '1':
                dp[r + 1][c + 1] = min(dp[r][c], dp[r + 1][c], dp[r][c + 1]) + 1
                max_side = max(max_side, dp[r + 1][c + 1])

    return max_side * max_side

# Time: O(m*n), Space: O(m*n)

print(largestSqr([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))
print(largestSqr([["0","1"],["1","0"]]))
print(largestSqr([["0"]]))
