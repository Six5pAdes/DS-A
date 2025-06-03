class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# mon
'''
You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.
The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.
Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Return the sum of the two numbers as a linked list.

Example 1:
Input: l1 = [1,2,3], l2 = [4,5,6]
Output: [5,7,9]
Explanation: 321 + 654 = 975.

Example 2:
Input: l1 = [9], l2 = [9]
Output: [8,1]
'''

def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:
    dummy = ListNode()
    curr = dummy

    carry = 0

    while l1 or l2 or carry:
        v1 = l1.val if l1 else 0
        v2 = l2.val if l2 else 0

        val = v1 + v2 + carry
        carry = val // 10
        val = val % 10
        curr.next = ListNode(val)

        curr = curr.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
    return dummy.next

# print(addTwoNumbers([1,2,3], [4,5,6]))
# print(addTwoNumbers([9.], [9]))

# time: O(m + n), space: O(1)

# tues
'''You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range
[1, n] inclusive.
Every integer appears exactly once, except for one integer which appears two or more times. Return the integer that appears more than once.

Example 1:
Input: nums = [1,2,3,2,2]
Output: 2

Example 2:
Input: nums = [1,2,3,4,4]
Output: 4
'''

def findDuplicate(nums):
    first, last = 0, 0
    while True:
        first = nums[first]
        last = nums[nums[last]]
        if first == last:
            break

    first2 = 0
    while True:
        first = nums[first]
        first2 = nums[first2]
        if first == first2:
            return first


print(findDuplicate([1,2,3,2,2]))
print(findDuplicate([1,2,3,4,4]))

# time: O(n), space: O(1)

# weds

# thurs

# fri
