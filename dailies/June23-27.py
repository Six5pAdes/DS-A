from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# mon
'''Given the root of a binary tree, return true if it is a valid binary search tree, otherwise return false.

A valid binary search tree satisfies the following constraints:
The left subtree of every node contains only nodes with keys less than the node's key.
The right subtree of every node contains only nodes with keys greater than the node's key.
Both the left and right subtrees are also binary search trees.

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [1,2,3]
Output: false
Explanation: The root node's value is 1 but its left child's value is 2 which is greater than 1.
'''

def isValidBST(root):
    if not root: return True

    q = deque([(root, float("-inf"), float("inf"))])

    while q:
        node, left, right = q.popleft()
        if not(left < node.val < right):
            return False

        if node.left:
            q.append((node.left, left, node.val))
        if node.right:
            q.append((node.right, node.val, right))

    return True

# print(isValidBST([2,1,3]))
# print(isValidBST([1,2,3]))

# time: O(n), space: O(n)

# tues
'''Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

A binary search tree satisfies the following constraints:
The left subtree of every node contains only nodes with keys less than the node's key.
The right subtree of every node contains only nodes with keys greater than the node's key.
Both the left and right subtrees are also binary search trees.

Example 1:
Input: root = [2,1,3], k = 1
Output: 1

Example 2:
Input: root = [4,3,5,2,null], k = 4
Output: 5
'''

def kSmall(root, k):
    stack = []
    curr = root

    while stack or curr:
        while curr:
            stack.append(curr)
            curr = curr.left
        curr = stack.pop()
        k -= 1
        if k == 0:
            return curr.val
        curr = curr.right

print(kSmall([2,1,3], 1))
print(kSmall([4,3,5,2,None], 4))

# time: O(n), O(n)

# weds
''''''

def ____():
    return

# print()

# time: O(), O()

# thurs
''''''

def ____():
    return

# print()

# time: O(), O()

# fri
''''''

def ____():
    return

# print()

# time: O(), O()
