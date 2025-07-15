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

print(dupliSubset([1,2,1]))
print(dupliSubset([7,7]))

# weds

# thurs

# fri
