// mon
/* You are given a matrix grid where grid[i] is either a 0 (representing water) or 1 (representing land).

An island is defined as a group of 1's connected horizontally or vertically. You may assume all four edges of the grid are surrounded by water.
The area of an island is defined as the number of cells within the island.

Return the maximum area of an island in grid. If no island exists, return 0.

Example 1:
Input: grid = [
  [0,1,1,0,1],
  [1,0,1,0,1],
  [0,1,1,0,1],
  [0,1,0,0,1]
]
Output: 6
Explanation: 1's cannot be connected diagonally, so the maximum area of the island is 6.
*/

// time & space: O(m * n)

function maxArea(grid) {
  const directs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const rows = grid.length,
    cols = grid[0].length;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) return 0;

    grid[r][c] = 0;
    let res = 1;
    for (const [dr, dc] of directs) {
      res += dfs(r + dr, c + dc);
    }

    return res;
  };

  let area = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        area = Math.max(area, dfs(r, c));
      }
    }
  }

  return area;
}

// console.log(
//   maxArea([
//     [0, 1, 1, 0, 1],
//     [1, 0, 1, 0, 1],
//     [0, 1, 1, 0, 1],
//     [0, 1, 0, 0, 1],
//   ])
// );

// tues
/* Given a node in a connected undirected graph, return a deep copy of the graph.
Each node in the graph contains an integer value and a list of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

The graph is shown in the test cases as an adjacency list. An adjacency list is a mapping of nodes to lists, used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

For simplicity, nodes values are numbered from 1 to n, where n is the total number of nodes in the graph. The index of each node within the adjacency list is the same as the node's value (1-indexed).

The input node will always be the first node in the graph and have 1 as the value.

Example 1:
Input: adjList = [[2],[1,3],[2]]
Output: [[2],[1,3],[2]]
Explanation: There are 3 nodes in the graph.
Node 1: val = 1 and neighbors = [2].
Node 2: val = 2 and neighbors = [1, 3].
Node 3: val = 3 and neighbors = [2].

Example 2:
Input: adjList = [[]]
Output: [[]]
Explanation: The graph has one node with no neighbors.

Example 3:
Input: adjList = []
Output: []
Explanation: The graph is empty.
*/

// time: O(V + E), space: O(E)

class Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node) {
  if (!node) return null;
  const neigh = new Map();
  const q = new Queue();
  neigh.set(node, new Node(node.val));
  q.push(node);

  while (!q.isEmpty()) {
    const curr = q.pop();
    for (const n of curr.neighbors) {
      if (!neigh.has(n)) {
        neigh.set(n, new Node(n.val));
        q.push(n);
      }

      neigh.get(curr).neighbors.push(neigh.get(n));
    }
  }

  return neigh.get(node);
}

// console.log(cloneGraph([[[2], [1, 3], [2]]]));
// console.log(cloneGraph([[]]));
// console.log(cloneGraph([]));

// weds
/* You are given a m×n 2D grid initialized with these three possible values:

1. -1 - A water cell that can not be traversed.
2. 0 - A treasure chest.
3. INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest then the value should remain INF.

Assume the grid can only be traversed up, down, left, or right.
Modify the grid in-place.

Example 1:
Input: [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]
Output: [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]

Example 2:
Input: [
  [0,-1],
  [2147483647,2147483647]
]
Output: [
  [0,-1],
  [1,2]
]
  */

// time & space: O(m * n)

function islesAndTreasures(grid) {
  const rows = grid.length,
    cols = grid[0].length;
  let q = new Queue();
  let visit = new Set();

  function addCell(r, c) {
    if (
      Math.min(r, c) < 0 ||
      r === rows ||
      c === cols ||
      visit.has(r + "," + c) ||
      grid[r][c] === -1
    ) {
      return;
    }

    visit.add(r + "," + c);
    q.push([r, c]);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) {
        q.push([r, c]);
        visit.add(r + "," + c);
      }
    }
  }

  let dist = 0;
  while (!q.isEmpty()) {
    for (let i = q.size(); i > 0; i--) {
      let [r, c] = q.pop();
      grid[r][c] = dist;

      addCell(r, c + 1);
      addCell(r, c - 1);
      addCell(r + 1, c);
      addCell(r - 1, c);
    }

    dist += 1;
  }
}

// console.log(
//   islesAndTreasures([
//     [2147483647, -1, 0, 2147483647],
//     [2147483647, 2147483647, 2147483647, -1],
//     [2147483647, -1, 2147483647, -1],
//     [0, -1, 2147483647, 2147483647],
//   ])
// );
// console.log(
//   islesAndTreasures([
//     [0, -1],
//     [2147483647, 2147483647],
//   ])
// );

// thurs
/* You are given a 2-D matrix grid. Each cell can have one of three possible values:
0 representing an empty cell
1 representing a fresh fruit
2 representing a rotten fruit
Every minute, if a fresh fruit is horizontally or vertically adjacent to a rotten fruit, then the fresh fruit also becomes rotten.

Return the minimum number of minutes that must elapse until there are zero fresh fruits remaining. If this state is impossible within the grid, return -1.

Example 1:
Input: grid = [[1,1,0],[0,1,1],[0,1,2]]
Output: 4

Example 2:
Input: grid = [[1,0,1],[0,2,0],[1,0,1]]
Output: -1
*/

// time & space: O(m * n)

function rotted(grid) {
  const q = [];
  let fresh = 0;
  let time = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) fresh++;
      if (grid[r][c] === 2) q.push([r, c]);
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (fresh > 0 && q.length > 0) {
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const [curR, curC] = q.shift();

      for (const [dr, dc] of directions) {
        const row = curR + dr,
          col = curC + dc;

        if (
          row >= 0 &&
          row < grid.length &&
          col >= 0 &&
          col < grid[0].length &&
          grid[row][col] === 1
        ) {
          grid[row][col] = 2;
          q.push([row, col]);
          fresh--;
        }
      }
    }

    time++;
  }

  return fresh === 0 ? time : -1;
}

console.log(
  rotted([
    [1, 1, 0],
    [0, 1, 1],
    [0, 1, 2],
  ])
);
console.log(
  rotted([
    [1, 0, 1],
    [0, 2, 0],
    [1, 0, 1],
  ])
);

// fri
