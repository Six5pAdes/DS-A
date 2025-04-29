# mon
''' Given a string s, find the length of the longest substring without duplicate characters.
A substring is a contiguous sequence of characters within a string.

Example 1:
Input: s = "zxyzxyz"
Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:
Input: s = "xxxx"
Output: 1
'''

def longestSubstr(s):
    charSet = set()
    l = 0
    res = 0

    for r in range(len(s)):
        while s[r] in charSet:
            charSet.remove(s[l])
            l += 1
        charSet.add(s[r])
        res = max(res, r - l + 1)

    return res

# time: O(n), space: O(m)

# print(longestSubstr("zxyzxyz"))
# print(longestSubstr("xxxx"))

# tues
''' You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.
After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Example 1:
Input: s = "XYYX", k = 2
Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:
Input: s = "AAABABB", k = 1
Output: 5
'''

def charReplace(s, k):
    count = {}
    res = 0
    l = 0
    maxL = 0

    for r in range (len(s)):
        count[s[r]] = 1 + count.get(s[r], 0)
        maxL = max(maxL, count[s[r]])

        while (r - l + 1) - maxL > k:
            count[s[l]] -= 1
            l += 1
        res = max(res, r - l + 1)

    return res

# time: O(n), space: O(m)

print(charReplace("XYYX", 2))
print(charReplace("AAABABB", 1))

# weds
''''''

def ____():
    return

# time: O(), space: O()

# print()

# thurs
''''''

def ____():
    return

# time: O(), space: O()

# print()

# fri
''''''

def ____():
    return

# time: O(), space: O()

# print()
