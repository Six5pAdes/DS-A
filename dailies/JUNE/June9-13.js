// mon
/* You are given the root of a binary tree root. Invert the binary tree and return its root.

Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [1,3,2,7,6,5,4]

Example 2:
Input: root = [3,2,1]
Output: [3,1,2]

Example 3:
Input: root = []
Output: []
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertTree(root) {
  if (!root) return null;

  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    [node.left, node.right] = [node.right, node.left];

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return root;
}

// console.log(invertTree([1, 2, 3, 4, 5, 6, 7]));
// console.log(invertTree([3, 2, 1]));
// console.log(invertTree([]));

// time: O(n), space: O(n)

// tues
/* Given the root of a binary tree, return its depth.
The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [1,2,3,null,null,4]
Output: 3

Example 2:
Input: root = []
Output: 0
*/

function maxDepth(root) {
  const stack = [[root, 1]];
  let res = 0;

  while (stack.length > 0) {
    const curr = stack.pop();
    const node = curr[0];
    const depth = curr[1];

    if (node !== null) {
      res = Math.max(res, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return res;
}

// console.log(maxDepth([1, 2, 3, null, null, 4]));
// console.log(maxDepth([]));

// time: O(n), space: O(n)

// weds
/* The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.
The length of a path between two nodes in a binary tree is the number of edges between the nodes.
Given the root of a binary tree root, return the diameter of the tree.

Example 1:
Input: root = [1,null,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [1,2,3,5] or [5,3,2,4].

Example 2:
Input: root = [1,2,3]
Output: 2
*/

function diameter(root) {
  if (!root) return 0;

  let maxDiameter = 0;

  function dfs(node) {
    if (!node) return 0;

    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);

    // Update max diameter
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

    // Return height of current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  dfs(root);
  return maxDiameter;
}

// console.log(
//   diameter(
//     new TreeNode(
//       1,
//       null,
//       new TreeNode(2, new TreeNode(3), new TreeNode(4, new TreeNode(5)))
//     )
//   )
// );
// console.log(diameter(new TreeNode(1, new TreeNode(2), new TreeNode(3))));

// time: O(n), space: O(n)

// thurs
/* Given a binary tree, return true if it is height-balanced and false otherwise.
A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:
Input: root = [1,2,3,null,null,4]
Output: true

Example 2:
Input: root = [1,2,3,null,null,4,null,5]
Output: false

Example 3:
Input: root = []
Output: true
*/

function balance(root) {
  let stack = [];
  let node = root,
    last = null;
  let depth = new Map();

  while (stack.length > 0 || node !== null) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack[stack.length - 1];

      if (node.right === null || last === node.right) {
        stack.pop();

        let left = depth.get(node.left) || 0;
        let right = depth.get(node.right) || 0;

        if (Math.abs(left - right) > 1) return false;
        depth.set(node, 1 + Math.max(left, right));

        last = node;
        node = null;
      } else node = node.right;
    }
  }

  return true;
}

// console.loge(balance([1, 2, 3, null, null, 4]));
// console.loge(balance([1, 2, 3, null, null, 4, null, 5]));
// console.loge(balance([]));

// time: O(n), space: O(n)

// fri
/* Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.
Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [4,7], q = [4,null,7]
Output: false

Example 3:
Input: p = [1,2,3], q = [1,3,2]
Output: false
*/

function isSame(p, q) {
  const stack = [[p, q]];

  while (stack.length) {
    const [node1, node2] = stack.pop();

    if (!node1 && !node2) continue;
    if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }

    stack.push([node1.right, node2.right]);
    stack.push([node1.left, node2.left]);
  }

  return true;
}

console.log(isSame([1, 2, 3], [1, 2, 3]));
console.log(isSame([4, 7], [4, null, 7]));
console.log(isSame([1, 2, 3], [1, 3, 2]));

// time: O(n), space: O(n)
