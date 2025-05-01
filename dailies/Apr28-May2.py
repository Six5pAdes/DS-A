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

# print(charReplace("XYYX", 2))
# print(charReplace("AAABABB", 1))

# weds
''' You are given two strings s1 and s2.
Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.
Both strings only contain lowercase letters.

Example 1:
Input: s1 = "abc", s2 = "lecabee"
Output: true
Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

Example 2:
Input: s1 = "abc", s2 = "lecaabee"
Output: false
'''

def strPermute(s1, s2):
    if len(s1) > len(s2): return False

    s1Count, s2Count = [0] * 26, [0] * 26
    for r in range(len(s1)):
        s1Count[ord(s1[r]) - ord('a')] += 1
        s2Count[ord(s2[r]) - ord('a')] += 1

    matches = 0
    for i in range(26):
        matches += (1 if s1Count[i] == s2Count[i] else 0)

    l = 0
    for x in range(len(s1), len(s2)):
        if matches == 26: return True

        idx = ord(s2[x]) - ord('a')
        s2Count[idx] += 1
        if s1Count[idx] == s2Count[idx]:
            matches += 1
        elif s1Count[idx] + 1 == s2Count[idx]:
            matches -= 1

        idx = ord(s2[l]) - ord('a')
        s2Count[idx] -= 1
        if s1Count[idx] == s2Count[idx]:
            matches += 1
        elif s1Count[idx] - 1 == s2Count[idx]:
            matches -= 1
        l += 1

    return matches == 26

# time: O(n), space: O(1)

# print(strPermute("abc", "lecabee"))
# print(strPermute("abc", "lecaabee"))

# thurs
''' Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".
You may assume that the correct output is always unique.

Example 1:
Input: s = "OUZODYXAZV", t = "XYZ"
Output: "YXAZ"
Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

Example 2:
Input: s = "xyz", t = "xyz"
Output: "xyz"

Example 3:
Input: s = "x", t = "xy"
Output: ""
'''

def minSubstr(s, t):
    if t == "": return "0"

    counted, window = {}, {}

    for c in t:
        counted[c] = 1 + counted.get(c, 0)

    has, need = 0, len(counted)
    res, resLen = [-1, -1], float("infinity")
    l = 0

    for r in range(len(s)):
        c = s[r]
        window[c] = 1 + window.get(c, 0)

        if c in counted and window[c] == counted[c]:
            has += 1

        while has == need:
            if (r - l + 1) < resLen:
                res = [l, r]
                resLen = r - l + 1

            window[s[l]] -= 1
            if s[l] in counted and window[s[l]] < counted[s[l]]:
                has -= 1
            l += 1

    l, r = res
    return s[l : r + 1] if resLen != float("infinity") else "0"

# time: O(n), space: O(m)

print(minSubstr("OUZODYXAZV", "XYZ"))
print(minSubstr("xyz", "xyz"))
print(minSubstr("x", "xy"))

# fri
''''''

def ____():
    return

# time: O(), space: O()

# print()
