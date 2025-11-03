# mon
'''You are given an array of non-overlapping intervals intervals where intervals[i] = [start_i, end_i] represents the start and the end time of the ith interval. intervals is initially sorted in ascending order by start_i.
You are given another interval newInterval = [start, end].
Insert newInterval into intervals such that intervals is still sorted in ascending order by start_i and also intervals still does not have any overlapping intervals. You may merge the overlapping intervals if needed.
Return intervals after adding newInterval.

Note: Intervals are non-overlapping if they have no common point. For example, [1,2] and [3,4] are non-overlapping, but [1,2] and [2,3] are overlapping.

Example 1:
Input: intervals = [[1,3],[4,6]], newInterval = [2,5]
Output: [[1,6]]

Example 2:
Input: intervals = [[1,2],[3,5],[9,10]], newInterval = [6,7]
Output: [[1,2],[3,5],[6,7],[9,10]]
'''

# time: O(n), space: O(1)

def insert(intervals, newInterval):
    n = len(intervals)
    i = 0
    res = []

    while i < n and intervals[i][1] < newInterval[0]:
        res.append(intervals[i])
        i += 1

    while i < n and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1

    res.append(newInterval)

    while i < n:
        res.append(intervals[i])
        i += 1

    return res

# print(insert([[1,3],[4,6]], [2,5]))
# print(insert([[1,2],[3,5],[9,10]], [6,7]))

# tues
'''Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
You may return the answer in any order.
Note: Intervals are non-overlapping if they have no common point. For example, [1, 2] and [3, 4] are non-overlapping, but [1, 2] and [2, 3] are overlapping.

Example 1:
Input: intervals = [[1,3],[1,5],[6,7]]
Output: [[1,5],[6,7]]

Example 2:
Input: intervals = [[1,2],[2,3]]
Output: [[1,3]]
'''

# time: O(n log n), space: O(n)

from collections import defaultdict

def merge(intervals):
    mp = defaultdict(int)
    for start, end in intervals:
        mp[start] += 1
        mp[end] -= 1

    res = []
    interval = []
    have = 0

    for i in sorted(mp):
        if not interval:
            interval.append(i)
        have += mp[i]

        if have == 0:
            interval.append(i)
            res.append(interval)
            interval = []

    return res

# print(merge([[1, 3], [1, 5], [6, 7]]))
# print(merge([[1, 2], [2, 3]]))

# weds
'''Given an array of intervals intervals where intervals[i] = [start_i, end_i], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
Note: Intervals are non-overlapping even if they have a common point. For example, [1, 3] and [2, 4] are overlapping, but [1, 2] and [2, 3] are non-overlapping.

Example 1:
Input: intervals = [[1,2],[2,4],[1,4]]
Output: 1
Explanation: After [1,4] is removed, the rest of the intervals are non-overlapping.

Example 2:
Input: intervals = [[1,2],[2,4]]
Output: 0
'''

# time: O(n log n), space: O(n)

def eraseOverlap(intervals):
    intervals.sort()
    res = 0
    firstEnd = intervals[0][1]

    for start, end in intervals[1:]:
        if start < firstEnd:
            res += 1
            firstEnd = min(firstEnd, end)
        elif start >= firstEnd:
            firstEnd = end

    return res

# print(eraseOverlap([[1,2],[2,4],[1,4]]))
# print(eraseOverlap([[1,2],[2,4]]))

# thurs
'''Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

Example 1:
Input: intervals = [(0,30),(5,10),(15,20)]
Output: false
Explanation:
(0,30) and (5,10) will conflict
(0,30) and (15,20) will conflict

Example 2:
Input: intervals = [(5,8),(9,15)]
Output: true

Note:
(0,8),(8,10) is not considered a conflict at 8
'''

# time: O(n log n), space: O(n)

def meetingRooms(intervals):
    intervals.sort(key=lambda i: i.start)

    for i in range(1, len(intervals)):
        i1 = intervals[i - 1]
        i2 = intervals[i]

        if i1.end > i2.start:
            return False

    return True

# print(meetingRooms([(0,30),(5,10),(15,20)]))
# print(meetingRooms([(5,8),(9,15)]))

# fri
'''Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), find the minimum number of days required to schedule all meetings without any conflicts.
Note: (0,8),(8,10) is not considered a conflict at 8.

Example 1:
Input: intervals = [(0,40),(5,10),(15,20)]
Output: 2
Explanation:
day1: (0,40)
day2: (5,10),(15,20)

Example 2:
Input: intervals = [(4,9)]
Output: 1
'''

# time: O(n log n), space: O(n)

def minMeetings(intervals):
    start = sorted([i.start for i in intervals])
    end = sorted([i.end for i in intervals])
    res = count = 0
    s = e = 0

    while s < len(intervals):
        if start[s] < end[e]:
            s += 1
            count += 1
        else:
            e += 1
            count -= 1

        res = max(res, count)

    return res

print(minMeetings([(0,40),(5,10),(15,20)]))
print(minMeetings([(4,9)])  )
