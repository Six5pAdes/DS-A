/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
 */

function ListNode(data, next = null) {
  this.data = data;
  this.next = next;
}

function removeNode(head, n) {
  // Create a dummy node to point to the head
  let dummy = new ListNode(0);
  // Point the dummy node to the head
  dummy.next = head;

  // Create two pointers to point to the dummy node
  let first = dummy;
  let second = dummy;

  // Move the first pointer to the n+1 node
  for (let i = 0; i <= n; i++) {
    // If the first pointer is null, return the head
    first = first.next;
  }

  // Move the first and second pointers until the first pointer is null
  while (first != null) {
    first = first.next;
    second = second.next;
  }

  // Remove the nth node from the end
  second.next = second.next.next;

  // Return the head
  return dummy.next;
}

console.log(removeNode([1, 2, 3, 4, 5], 2));
// console.log(removeNode([1], 1));
// console.log(removeNode([1, 2], 1));
