/*

Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]  // 3
                                    // 9     // 20
                                        // 15       // 17

Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

*/

const maxDepth = function (root) {
  //   /*
  // recurse
  // if tree is empty, then return 0
  if (!root) return 0;

  // call for left side
  let leftHeight = maxDepth(root.left);
  // call for right side
  let rightHeight = maxDepth(root.right);

  // add left and right sides
  return Math.max(leftHeight, rightHeight) + 1;
  // */

  /*
  // iterative
  // initialize stack for root
  let count = 0;
  let stack = [root, 1];
  // while loop where stack is populated
  while (stack.length) {
    //pop each node,
    let curr = stack.pop();
    if (curr.left) {
      stack.push(curr.left);
    }
    if (curr.right) {
      stack.push(curr.right);
    }
  }
  return count;
    */
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
console.log(maxDepth([1, null, 2]));

// P5JS
// https://www.youtube.com/watch?v=ZMQbHMgK2rw&pp=ygUYbWF6ZSBydW5uaW5nIHZlcml0YXNlcnVt
