# mon
''' Given an array nums of unique integers, return all the possible permutations. You may return the answer in any order.

Example 1:

Input: nums = [1,2,3]

Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [7]

Output: [[7]]
'''

# time: O(n * n!), space: O(n)

def permute(nums):
    res = []

    def backtrack(path, used):
        if len(path) == len(nums):
            res.append(path[:])
            return

        for i in range(len(nums)):
            if not used[i]:
                used[i] = True
                path.append(nums[i])
                backtrack(path, used)
                path.pop()
                used[i] = False

    backtrack([], [False] * len(nums))
    return res

# print("Test 1:", permute([1,2,3]))  # Expect 6 permutations
# print("Test 2:", permute([7]))      # Expect [[7]]

# tues
'''You are given an array nums of integers, which may contain duplicates. Return all possible subsets.

The solution must not contain duplicate subsets. You may return the solution in any order.

Example 1:

Input: nums = [1,2,1]

Output: [[],[1],[1,2],[1,1],[1,2,1],[2]]
Example 2:

Input: nums = [7,7]

Output: [[],[7], [7,7]]
'''

# time: O(n * (2^n)), space: O(n)

def dupliSubset(nums):
    res = []
    nums.sort()

    def backtrack(i, subset):
        if i == len(nums):
            res.append(subset[::])
            return

        subset.append(nums[i])
        backtrack(i + 1, subset)
        subset.pop()

        while i + 1 < len(nums) and nums[i] == nums[i + 1]:
            i += 1
        backtrack(i + 1, subset)

    backtrack(0, [])
    return res

# print(dupliSubset([1,2,1]))
# print(dupliSubset([7,7]))

# weds
'''Given a 2-D grid of characters board and a string word, return true if the word is present in the grid, otherwise return false.

For the word to be present it must be possible to form it with a path in the board with horizontally or vertically neighboring cells. The same cell may not be used more than once in a word.

Example 1:
Input:
board = [
  ["A","B","C","D"],
  ["S","A","A","T"],
  ["A","C","A","E"]
],
word = "CAT"
Output: true

Example 2:
Input:
board = [
  ["A","B","C","D"],
  ["S","A","A","T"],
  ["A","C","A","E"]
],
word = "BAT"
Output: false
'''

# time: O(m * (4^n)), space: O(n)

def exists(board, word):
    rows, cols = len(board), len(board[0])

    def dfs(r, c, i):
        if i == len(word):
            return True

        if (r < 0 or c < 0 or r >= rows or c >= cols or
            word[i] != board[r][c] or board[r][c] == '#'):
            return False

        board[r][c] = '#'
        res = (
            dfs(r + 1, c, i + 1) or
            dfs(r - 1, c, i + 1) or
            dfs(r, c + 1, i + 1) or
            dfs(r, c - 1, i + 1)
            )
        board[r][c] = word[i]
        return res

    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0):
                return True
    return False

print(exists(board = [
  ["A","B","C","D"],
  ["S","A","A","T"],
  ["A","C","A","E"]
],
word = "CAT"))
print(exists(board = [
  ["A","B","C","D"],
  ["S","A","A","T"],
  ["A","C","A","E"]
],
word = "BAT"))

# thurs

# fri
