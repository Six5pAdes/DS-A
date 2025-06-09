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

console.log(invertTree([1, 2, 3, 4, 5, 6, 7]));
console.log(invertTree([3, 2, 1]));
console.log(invertTree([]));

// time: O(n), space: O(n)

// tues

// weds

// thurs

// fri
