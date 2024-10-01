'''
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
'''

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def removeHead(head, n):
    dummy = ListNode(0)
    dummy.next = head
    first = dummy
    second = dummy

    for r in range(n):
        first = first.next

    while first.next:
        first = first.next
        second = second.next

    second.next = second.next.next

    return dummy.next


print(removeHead([1, 2, 3, 4, 5], 2))
