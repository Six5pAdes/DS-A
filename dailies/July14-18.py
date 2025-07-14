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

# Tests
if __name__ == "__main__":
    print("Test 1:", permute([1,2,3]))  # Expect 6 permutations
    print("Test 2:", permute([7]))      # Expect [[7]]

# tues

# weds

# thurs

# fri
