// mon
/* You are given a connected undirected graph with n nodes labeled from 1 to n. Initially, it contained no cycles and consisted of n-1 edges.

We have now added one additional edge to the graph. The edge has two different vertices chosen from 1 to n, and was not an edge that previously existed in the graph.

The graph is represented as an array edges of length n where edges[i] = [ai, bi] represents an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the graph is still a connected non-cyclical graph. If there are multiple answers, return the edge that appears last in the input edges.

Example 1:
Input: edges = [[1,2],[1,3],[3,4],[2,4]]
Output: [2,4]

Example 2:
Input: edges = [[1,2],[1,3],[1,4],[3,4],[4,5]]
Output: [3,4]
*/

// time & space: O(V + E)

function redundant(edges) {
  const n = edges.length;
  const que = Array.from({ length: n + 1 }, () => []);

  for (const [u, v] of edges) {
    que[u].push(v);
    que[v].push(u);
  }

  const visit = Array(n + 1).fill(false);
  const cycle = new Set();
  let start = -1;

  const dfs = (node, par) => {
    if (visit[node]) {
      start = node;
      return true;
    }
    visit[node] = true;

    for (const neigh of que[node]) {
      if (neigh === par) continue;
      if (dfs(neigh, node)) {
        if (start !== -1) {
          cycle.add(node);
        }
        if (node === start) {
          start = -1;
        }

        return true;
      }
    }

    return false;
  };

  dfs(1, -1);

  for (let i = edges.length - 1; i >= 0; i--) {
    const [u, v] = edges[i];

    if (cycle.has(u) && cycle.has(v)) {
      return [u, v];
    }
  }

  return [];
}

console.log(
  redundant([
    [1, 2],
    [1, 3],
    [3, 4],
    [2, 4],
  ])
);
console.log(
  redundant([
    [1, 2],
    [1, 3],
    [1, 4],
    [3, 4],
    [4, 5],
  ])
);

// tues
/* */

// time: O(), space: O()

function ___() {}

// weds
/* */

// time: O(), space: O()

function ___() {}

// thurs
/* */

// time: O(), space: O()

function ___() {}

// fri
/* */

// time: O(), space: O()

function ___() {}
