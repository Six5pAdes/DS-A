# mon
''' Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
Please implement encode and decode

Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Example 2:
Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]
'''
def encode(strs):
    encoded = ''
    for s in strs:
        encoded += str(len(s)) + '#' + s
    return encoded

def decode(encoded):
    decoded = []
    i = 0
    while i < len(encoded):
        j = encoded.index('#', i)
        length = int(encoded[i:j])
        decoded.append(encoded[j + 1:j + 1 + length])
        i = j + 1 + length
    return decoded

# Time: O(m), Space: O(m+n)

# print(encode(["neet", "code", "love", "you"]))
# print(decode("4#neet4#code4#love3#you"))

# print(encode(["we", "say", ":", "yes"]))
# print(decode("2#we3#say1#:3#yes"))

# tues
'''Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
Each product is guaranteed to fit in a 32-bit integer.
Follow-up: Could you solve it in O(n) time without using the division operation?

Example 1:
Input: nums = [1,2,4,6]
Output: [48,24,12,8]

Example 2:
Input: nums = [-1,0,1,2,3]
Output: [0,-6,0,0,0]
'''

def prodExceptSelf(nums):
    n = len(nums)
    output = [1] * n
    left_product = 1
    right_product = 1

    for i in range(n):
        output[i] *= left_product
        left_product *= nums[i]

    for i in range(n - 1, -1, -1):
        output[i] *= right_product
        right_product *= nums[i]

    return output

# Time: O(n), Space: O(1)

# print(prodExceptSelf([1, 2, 4, 6]))
# print(prodExceptSelf([-1, 0, 1, 2, 3]))

# weds
'''You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:
Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
Return true if the Sudoku board is valid, otherwise return false.

Note: A board does not need to be full or be solvable to be valid.

Example 1:
Input: board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: There are two 1's in the top-left 3x3 sub-box.
'''

def validSudoku(board):
    for row in range(9):
        seen = set()
        for i in range(9):
            if board[row][i] == '.':
                continue
            if board[row][i] in seen:
                return False
            seen.add(board[row][i])

    for col in range(9):
        seen = set()
        for i in range(9):
            if board[i][col] == '.':
                continue
            if board[i][col] in seen:
                return False
            seen.add(board[i][col])

    for square in range(9):
        seen = set()
        for i in range(3):
            for j in range(3):
                row = (square // 3) * 3 + i
                col = (square % 3) * 3 + j
                if board[row][col] == '.':
                    continue
                if board[row][col] in seen:
                    return False
                seen.add(board[row][col])

    return True

# Time: O(n^2), Space: O(n^2)

# print(validSudoku([["1","2",".",".","3",".",".",".","."],
#  ["4",".",".","5",".",".",".",".","."],
#  [".","9","8",".",".",".",".",".","3"],
#  ["5",".",".",".","6",".",".",".","4"],
#  [".",".",".","8",".","3",".",".","5"],
#  ["7",".",".",".","2",".",".",".","6"],
#  [".",".",".",".",".",".","2",".","."],
#  [".",".",".","4","1","9",".",".","8"],
#  [".",".",".",".","8",".",".","7","9"]]))

# print(validSudoku([["1","2",".",".","3",".",".",".","."],
#  ["4",".",".","5",".",".",".",".","."],
#  [".","9","1",".",".",".",".",".","3"],
#  ["5",".",".",".","6",".",".",".","4"],
#  [".",".",".","8",".","3",".",".","5"],
#  ["7",".",".",".","2",".",".",".","6"],
#  [".",".",".",".",".",".","2",".","."],
#  [".",".",".","4","1","9",".",".","8"],
#  [".",".",".",".","8",".",".","7","9"]]))

# thurs
'''Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [2,20,4,10,3,4,5]
Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

Example 2:
Input: nums = [0,3,2,5,4,6,1,1]
Output: 7
'''

def consecutive(nums):
    numSet = set(nums)
    longest = 0

    for num in numSet:
        if (num - 1) not in numSet:
            length = 1
            while (num + length) in numSet:
                length += 1
            longest = max(length, longest)
    return longest

# Time: O(n), Space: O(n)

# print(consecutive([2,20,4,10,3,4,5]))
# print(consecutive([0,3,2,5,4,6,1,1]))

# fri
'''Given a string s, return true if it is a palindrome, otherwise return false.
A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:
Input: s = "Was it a car or a cat I saw?"
Output: true
Explanation: After considering only alphanumerical characters,
 we have "wasitacaroracatisaw", which is a palindrome.

Example 2:
Input: s = "tab a cat"
Output: false
Explanation: "tabacat" is not a palindrome.
'''

def validPalindrome(s):
    newStr = ''

    for i in s:
        if i.isalnum():
            newStr += i.lower()
    return newStr == newStr[::-1]

# Time: O(n), Space: O(n)

print(validPalindrome("Was it a car or a cat I saw?"))
print(validPalindrome("tab a cat"))
