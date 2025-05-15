# mon
''' There are n cars traveling to the same destination on a one-lane highway.
You are given two arrays of integers position and speed, both of length n.
position[i] is the position of the ith car (in miles)
speed[i] is the speed of the ith car (in miles per hour)
The destination is at position target miles.
A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.
A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.
If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.
Return the number of different car fleets that will arrive at the destination.

Example 1:
Input: target = 10, position = [1,4], speed = [3,2]
Output: 1
Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.

Example 2:
Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]
Output: 3
Explanation: The cars starting at 4 and 7 become a fleet at position 10. The cars starting at 1 and 0 never catch up to the car ahead of them. Thus, there are 3 car fleets that will arrive at the destination.
'''

# Time: O(n log n), Space: O(n)

def carFleet(target, position, speed):
    pair = [(p, s) for p, s in zip(position, speed)]
    pair.sort(reverse = True)
    stack = []

    for p, s in pair:
        stack.append((target - p) / s)
        if (len(stack) >= 2 and stack[-1] <= stack[-2]):
            stack.pop()

    return len(stack)

# print(carFleet(10, [1,4], [3,2]))
# print(carFleet(10, [4,1,0,7], [2,2,1,1]))


# tues
'''You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.
Return the area of the largest rectangle that can be formed among the bars.
Note: This chart is known as a histogram.

Example 1:
Input: heights = [7,1,7,2,2,4]
Output: 8

Example 2:
Input: heights = [1,3,7]
Output: 7
'''

# Time: O(n), Space: O(n)

def histogram(heights):
    n = len(heights)
    stack = []
    maxArea = 0

    for i in range(n + 1):
        while stack and (i == n or heights[stack[-1]] >= heights[i]):
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1

            maxArea = max(maxArea, height * width)

        stack.append(i)
    return maxArea

# print(histogram([7,1,7,2,2,4]))
# print(histogram([1,3,7]))


# weds
'''You are given an array of distinct integers nums, sorted in ascending order, and an integer target.
Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.
Your solution must run in O(logn) time.

Example 1:
Input: nums = [-1,0,2,4,6,8], target = 4
Output: 3

Example 2:
Input: nums = [-1,0,2,4,6,8], target = 3
Output: -1
'''

# Time: O(logn), Space: O(1)

def search(nums, target):
    l = 0
    r = len(nums) - 1

    while (l <= r):
        m = l + ((r - l) // 2)

        if (nums[m] > target):
            r = m - 1
        elif (nums[m] < target):
            l = m + 1
        else: return m

    return -1

# print(search([-1,0,2,4,6,8], 4))
# print(search([-1,0,2,4,6,8], 3))


# thurs
'''You are given an m x n 2-D integer array matrix and an integer target.
Each row in matrix is sorted in non-decreasing order.
The first integer of every row is greater than the last integer of the previous row.
Return true if target exists within matrix or false otherwise.
Can you write a solution that runs in O(log(m * n)) time?

Example 1:
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
Output: true

Example 2:
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15
Output: false
'''

# Time: O(log(m * n)), Space: O(1)

def searchMatrix(matrix, target):
    rows, cols = len(matrix), len(matrix[0])
    l, r = 0, rows * cols - 1

    while (l <= r):
        m = l + ((r - l) // 2)
        row, col = m // cols, m % cols

        if (target > matrix[row][col]):
            l = m + 1
        elif target < matrix[row][col]:
            r = m - 1
        else: return True

    return False

print(searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 10))
print(searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 15))


# fri
'''
'''

# Time: O(), Space: O()

def ____():
    return

print()
