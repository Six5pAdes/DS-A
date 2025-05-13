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

print(histogram([7,1,7,2,2,4]))
print(histogram([1,3,7]))


# weds
'''
'''

# Time: O(), Space: O()

def ____():
    return

print()


# thurs
'''
'''

# Time: O(), Space: O()

def ____():
    return

print()


# fri
'''
'''

# Time: O(), Space: O()

def ____():
    return

print()
