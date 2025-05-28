// mon
/* You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted linked list and return the head of the new sorted linked list.
The new list should be made up of nodes from list1 and list2.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,5]
Output: [1,1,2,3,4,5]

Example 2:
Input: list1 = [], list2 = [1,2]
Output: [1,2]

Example 3:
Input: list1 = [], list2 = []
Output: []
*/

function mergeTwoLists(list1, list2) {
  let dummy = { val: 0, next: null };
  let curr = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  } else curr.next = list2;

  return dummy.next;
}

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 5]));
// console.log(mergeTwoLists([], [1, 2]));
// console.log(mergeTwoLists([], []));

// Time: O(m + n), Space: O(1)

// tues
/* Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.
Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.
Note: index is not given to you as a parameter.

Example 1:
Input: head = [1,2,3,4], index = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], index = -1
Output: false
*/

function cycling(head) {
  let first,
    sec = head;

  while (first !== null && first.next !== null) {
    first = first.next.next;
    sec = sec.next;

    if (first === sec) return true;
  }

  return false;
}

// console.log(cycling([1, 2, 3, 4]));
// console.log(cycling([1, 2]));

// Time: O(n), Space: O(1)

// weds
/* You are given the head of a singly linked-list.
The positions of a linked list of length = 7 for example, can intially be represented as:
[0, 1, 2, 3, 4, 5, 6]
Reorder the nodes of the linked list to be in the following order:
[0, 6, 1, 5, 2, 4, 3]

Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:
[0, n-1, 1, n-2, 2, n-3, ...]
You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

Example 1:
Input: head = [2,4,6,8]
Output: [2,8,4,6]

Example 2:
Input: head = [2,4,6,8,10]
Output: [2,10,4,8,6]
*/

function reorder(head) {
  let before = head;
  let after = head.next;
  while (after !== null && after.next !== null) {
    before = before.next;
    after = after.next.next;
  }

  let later = before.next;
  let prev = (before.next = null);
  while (later !== null) {
    const temp = later.next;
    later.next = prev;
    prev = later;
    later = temp;
  }

  let front = head;
  later = prev;
  while (later !== null) {
    const temp1 = front.next;
    const temp2 = later.next;
    front.next = later;
    later.next = temp1;
    front = temp1;
    later = temp2;
  }
}

console.log(reorder([2, 4, 6, 8]));
console.log(reorder([2, 4, 6, 8, 6]));

// time: O(n), space: O(1)

// thurs

// fri
