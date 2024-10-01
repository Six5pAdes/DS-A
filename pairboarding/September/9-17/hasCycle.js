/*
Cycle Detective
A linked list is said to contain a cycle if any node is visited more than once while traversing the list.

Complete the function provided for you in your editor. It has one parameter: a pointer to a Node object named head that points to the head of a linked list. Your function must return a boolean denoting whether or not there is a cycle in the list. If there is a cycle, return true; otherwise, return false.

Example:
const node3 = new Node(3, null);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

This creates the following list:
   1->2->3->null

detectCycle(node1) // Output: False

const cycleNode3 = new Node(3, null);
const cycleNode2 = new Node(2, cycleNode3);
const cycleNode1 = new Node(1, cycleNode2);

// reassign `next` attribute to create cycle
cycleNode3.next = cycleNode2;

Our list now looks like this:
   1->2->3->2->3->2 ... etc.

hasCycle(node1) // Output: true
*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function hasCycle(head) {
  // check for head
  if (!head) return false;
  //

  // initialize two pointers
  let point1 = head;
  let point2 = head;

  // while loop
  while (point2.next) {
    // reinitialize points to subsequent nodes
    point1 = point1.next;
    point2 = point2.next.next;

    // check if both points are the same
    if (point1 === point2) {
      return true;
    }
  }
  //   ends if point2 is done/no more next or head

  return false;
}

const node3 = new Node(3, null);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);
console.log(hasCycle(node1)); // false

const cycleNode3 = new Node(3, null);
const cycleNode2 = new Node(2, cycleNode3);
const cycleNode1 = new Node(1, cycleNode2);
cycleNode3.next = cycleNode2;
console.log(hasCycle(cycleNode1)); // true

const noNode = new Node(null);
console.log(hasCycle(noNode));
