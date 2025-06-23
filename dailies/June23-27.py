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

print(isValidBST([2,1,3]))
print(isValidBST([1,2,3]))

# time: O(n), space: O(n)

# tues
''''''

def ____():
    return

# print()

# time: O(), O()

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
