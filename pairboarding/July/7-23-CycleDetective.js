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

function nodeCycle(nodes) {
  //   const seen = {};

  //   let head = nodes;

  //   while (head) {
  //     if (seen[head]) return true;
  //     seen[head] = true;

  //     head = head.next;
  //   }

  //   return false;
  //   const seen = {};

  //   let temp = nodes;

  //   while (temp) {
  //     if (seen[temp]) return true;

  //     seen[temp] = true;

  //     temp = temp.next;
  //   }

  //   return false;

  let cycle = false;

  if (!nodes) cycle = false;

  let first = nodes;
  let last = nodes;

  while (first && last) {
    last = first.next;
    first = last.next.next;

    if (first == last) {
      cycle = true;
      break;
    }
  }

  return cycle;
}

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

const node3 = new Node(3, null);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);
console.log(nodeCycle(node1)); // 1->2->3->null False

const cycleNode3 = new Node(3, null);
const cycleNode2 = new Node(2, cycleNode3);
const cycleNode1 = new Node(1, cycleNode2);
cycleNode3.next = cycleNode2;
console.log(nodeCycle(cycleNode1)); // 1->2->3->2->3->2 ... etc. True
