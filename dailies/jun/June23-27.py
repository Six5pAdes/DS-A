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

# print(kSmall([2,1,3], 1))
# print(kSmall([4,3,5,2,None], 4))

# time: O(n), O(n)

# weds
'''You are given two integer arrays preorder and inorder.
preorder is the preorder traversal of a binary tree
inorder is the inorder traversal of the same tree

Both arrays are of the same size and consist of unique values.
Rebuild the binary tree from the preorder and inorder traversals and return its root.

Example 1:
Input: preorder = [1,2,3,4], inorder = [2,1,3,4]
Output: [1,2,3,null,null,null,4]

Example 2:
Input: preorder = [1], inorder = [1]
Output: [1]
'''

def rebuild(preorder, inorder):
    preDex = inDex = 0

    def dfs(limit):
        nonlocal preDex, inDex
        if preDex >= len(preorder):
            return None
        if inorder[inDex] == limit:
            inDex += 1
            return None

        root = TreeNode(preorder[preDex])
        preDex += 1
        root.left = dfs(root.val)
        root.right = dfs(limit)

        return root
    return dfs(float('inf'))

# print(rebuild([1,2,3,4], [2,1,3,4]))
# print(rebuild([1], [1]))

# time: O(n), O(n)

# thurs
'''Given the root of a non-empty binary tree, return the maximum path sum of any non-empty path.

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them. A node can not appear in the sequence more than once. The path does not necessarily need to include the root.
The path sum of a path is the sum of the node's values in the path.

Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The path is 2 -> 1 -> 3 with a sum of 2 + 1 + 3 = 6.

Example 2:
Input: root = [-15,10,20,null,null,15,5,-5]
Output: 40
Explanation: The path is 15 -> 20 -> 5 with a sum of 15 + 20 + 5 = 40.
'''

def maxPathSum(root):
    res = [root.val]

    def dfs(root):
        if not root: return 0

        leftMax = dfs(root.left)
        rightMax = dfs(root.right)
        leftMax = max(leftMax, 0)
        rightMax = max(rightMax, 0)

        res[0] = max(res[0], root.val + leftMax + rightMax)
        return root.val + max(leftMax, rightMax)

    dfs(root)
    return res[0]

print(maxPathSum([1,2,3]))
print(maxPathSum([-15,10,20,None,None,15,5,-5]))

# time: O(n), O(n)

# fri
'''Implement an algorithm to serialize and deserialize a binary tree.

Serialization is the process of converting an in-memory structure into a sequence of bits so that it can be stored or sent across a network to be reconstructed later in another computer environment.
You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure. There is no additional restriction on how your serialization/deserialization algorithm should work.

Note: The input/output format in the examples is the same as how NeetCode serializes a binary tree. You do not necessarily need to follow this format.

Example 1:
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

Example 2:
Input: root = []
Output: []
'''

class Codec:

    # Encodes a tree to a single string.
    def serialize(root):
        res = []

        def dfs(node):
            if not node:
                res.append("N")
                return

            res.append(str(node.val))
            dfs(node.left)
            dfs(node.right)

        dfs(root)
        return ','.join(res)


    # Decodes your encoded data to tree.
    def deserialize(self, data):
        vals = data.split(',')
        self.i = 0

        def dfs():
            if vals[self.i] == "N":
                self.i += 1
                return None

            node = TreeNode(int(vals[self.i]))
            self.i += 1
            node.left = dfs()
            node.right = dfs()
            return node

        return dfs()

# time: O(n), O(n)
