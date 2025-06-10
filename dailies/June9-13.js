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

console.log(maxDepth([1, 2, 3, null, null, 4]));
console.log(maxDepth([]));

// time: O(n), space: O(n)

// weds

// thurs

// fri
