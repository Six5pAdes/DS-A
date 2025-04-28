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

print(longestSubstr("zxyzxyz"))
print(longestSubstr("xxxx"))

# tues
''''''

def ____():
    return

# time: O(), space: O()

# print()

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
