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

console.log(isSubtree([1, 2, 3, 4, 5], [2, 4, 5]));
console.log(isSubtree([1, 2, 3, 4, 5, null, null, 6], [2, 4, 5]));

// time: O(m*n), space: O(m+n)

// tues
/* */

function ____() {}

// console.log();

// time: O(), space: O()

// weds
/* */

function ____() {}

// console.log();

// time: O(), space: O()

// thurs
/* */

function ____() {}

// console.log();

// time: O(), space: O()

// fri
/* */

function ____() {}

// console.log();

// time: O(), space: O()
