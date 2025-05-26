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

console.log(mergeTwoLists([1, 2, 4], [1, 3, 5]));
console.log(mergeTwoLists([], [1, 2]));
console.log(mergeTwoLists([], []));

// Time: O(m + n), Space: O(1)

// tues

// weds

// thurs

// fri
