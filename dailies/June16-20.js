// mon
/* Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:
Input: root = [1,2,3,4,5], subRoot = [2,4,5]
Output: true

Example 2:
Input: root = [1,2,3,4,5,null,null,6], subRoot = [2,4,5]
Output: false
*/

class Solution {
  isSubtree(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;

    return (
      this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    );
  }

  sameTree(root, subRoot) {
    if (!root && !subRoot) return true;

    if (root && subRoot && root.val === subRoot.val) {
      return (
        this.sameTree(root.left, subRoot.left) &&
        this.sameTree(root.right, subRoot.right)
      );
    }

    return false;
  }
}

// console.log(isSubtree([1, 2, 3, 4, 5], [2, 4, 5]));
// console.log(isSubtree([1, 2, 3, 4, 5, null, null, 6], [2, 4, 5]));

// time: O(m*n), space: O(m+n)

// tues
/* Given a binary search tree (BST) where all node values are unique, and two nodes from the tree p and q, return the lowest common ancestor (LCA) of the two nodes.
The lowest common ancestor between two nodes p and q is the lowest node in a tree T such that both p and q as descendants. The ancestor is allowed to be a descendant of itself.

Example 1:
Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8
Output: 5

Example 2:
Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 4
Output: 3
Explanation: The LCA of nodes 3 and 4 is 3, since a node can be a descendant of itself.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  if (!root || !p || !q) return null;

  if (Math.max(p.val, q.val) < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (Math.min(p.val, q.val) > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

// Test case 1
const root1 = new TreeNode(5);
root1.left = new TreeNode(3);
root1.right = new TreeNode(8);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(4);
root1.right.left = new TreeNode(7);
root1.right.right = new TreeNode(9);
root1.left.left.right = new TreeNode(2);

// console.log(
//   "Test 1 - LCA of 3 and 8:",
//   lowestCommonAncestor(root1, root1.left, root1.right).val
// ); // Should print 5

// Test case 2
// console.log(
//   "Test 2 - LCA of 3 and 4:",
//   lowestCommonAncestor(root1, root1.left, root1.left.right).val
// ); // Should print 3

// time: O(h), space: O(h)

// weds
/* Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [[1],[2,3],[4,5,6,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
*/

function levelOrder(root) {
  let res = [];
  if (!root) return res;

  const q = new Queue();
  q.push(root);

  while (!q.isEmpty()) {
    let level = [];

    for (let i = q.size(); i > 0; i--) {
      let node = q.pop();
      if (node !== null) {
        level.push(node.val);
        q.push(node.left);
        q.push(node.right);
      }
    }

    if (level.length > 0) {
      res.push(level);
    }
  }

  return res;
}

// console.log(levelOrder([1, 2, 3, 4, 5, 6, 7]));
// console.log(levelOrder([1]));
// console.log(levelOrder([]));

// time: O(n), space: O(n)

// thurs
/* You are given the root of a binary tree. Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.

Example 1:
Input: root = [1,2,3]
Output: [1,3]

Example 2:
Input: root = [1,2,3,4,5,6,7]
Output: [1,3,7]
*/

function rightSide(root) {
  const res = [];
  const q = new Queue();

  q.push(root);

  while (!q.isEmpty()) {
    let right = null;
    const qLen = q.size();

    for (let i = 0; i < qLen; i++) {
      const node = q.pop();
      if (node) {
        right = node;
        q.push(node.left);
        q.push(node.right);
      }
    }

    if (right) res.push(right.val);
  }

  return res;
}

// console.log(rightSide([1, 2, 3]));
// console.log(rightSide([1, 2, 3, 4, 5, 6, 7]));

// time: O(n), space: O(n)

// fri
/* Within a binary tree, a node x is considered good if the path from the root of the tree to the node x contains no nodes with a value greater than the value of node x
Given the root of a binary tree root, return the number of good nodes within the tree.

Example 1:
Input: root = [2,1,1,3,null,1,5]
Output: 3

Example 2:
Input: root = [1,2,-1,3,4]
Output: 4
*/

function goodNode(root) {
  let res = [];
  let q = new Queue();
  q.push([root, -Infinity]);

  while (!q.isEmpty()) {
    let [node, maxVal] = q.pop();
    if (node.val >= maxVal) {
      res++;
    }

    if (node.left) {
      q.push([node.left, Math.max(maxVal, node.val)]);
    }
    if (node.right) {
      q.push([node.right, Math.max(maxVal, node.val)]);
    }
  }

  return res;
}

console.log(goodNode([2, 1, 1, 3, null, 1, 5]));
console.log(goodNode([1, 2, -1, 3, 4]));

// time: O(n), space: O(n)
