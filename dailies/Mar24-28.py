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

print(minDist("horse", "ros"))
print(minDist("intention", "execution"))

# weds

# thurs

# fri
