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

print(longestCommonPrefix(["bat","bag","bank","band"]))
print(longestCommonPrefix(["dance","dag","danger","damage"]))
print(longestCommonPrefix(["neet","feet"]))

# tues
''''''

# time: O()

def ____():
    return

# print()

# weds
''''''

# time: O()

def ____():
    return

# print()

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
