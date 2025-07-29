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

console.log(cloneGraph([[[2], [1, 3], [2]]]));
console.log(cloneGraph([[]]));
console.log(cloneGraph([]));

// weds

// thurs

// fri
