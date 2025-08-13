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

// console.log(
//   redundant([
//     [1, 2],
//     [1, 3],
//     [3, 4],
//     [2, 4],
//   ])
// );
// console.log(
//   redundant([
//     [1, 2],
//     [1, 3],
//     [1, 4],
//     [3, 4],
//     [4, 5],
//   ])
// );

// tues
/* You are given two words, beginWord and endWord, and also a list of words wordList. All of the given words are of the same length, consisting of lowercase English letters, and are all distinct.

Your goal is to transform beginWord into endWord by following the rules:
You may transform beginWord to any word within wordList, provided that at exactly one position the words have a different character, and the rest of the positions have the same characters.
You may repeat the previous step with the new word that you obtain, and you may do this as many times as needed.
Return the minimum number of words within the transformation sequence needed to obtain the endWord, or 0 if no such sequence exists.

Example 1:
Input: beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sag","dag","dot"]
Output: 4
Explanation: The transformation sequence is "cat" -> "bat" -> "bag" -> "sag".

Example 2:
Input: beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sat","dag","dot"]
Output: 0
Explanation: There is no possible transformation sequence from "cat" to "sag" since the word "sag" is not in the wordList.
*/

// time & space: O((m ^ 2) * n)

function transformSeq(beginWord, endWord, wordList) {
  if (beginWord === endWord || !wordList.includes(endWord)) return 0;

  const m = wordList[0].length;
  const wordSet = new Set(wordList);
  const qb = new Queue([beginWord]);
  const qe = new Queue([endWord]);
  const fromBegin = { [beginWord]: 1 };
  const fromEnd = { [endWord]: 1 };

  while (!qb.isEmpty() && !qe.isEmpty()) {
    if (qb.size() > qb.size()) {
      [qb, qe] = [qe, qb];
      [fromBegin, fromEnd] = [fromEnd, fromBegin];
    }

    const size = qb.size();

    for (let k = 0; k < size; k++) {
      const word = qb.pop();
      const steps = fromBegin[word];

      for (let i = 0; i < m; i++) {
        for (let c = 97; c <= 122; c++) {
          if (String.fromCharCode(c) === word[i]) continue;

          const neigh =
            word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);

          if (!wordSet.has(neigh)) continue;

          if (fromEnd[neigh] !== undefined) {
            return steps + fromEnd[neigh];
          }
          if (fromBegin[neigh] === undefined) {
            fromBegin[neigh] = steps + 1;
            qb.push(neigh);
          }
        }
      }
    }
  }

  return 0;
}

// console.log(transformSeq("cat", "sag", ["bat", "bag", "sag", "dag", "dot"]));
// console.log(transformSeq("cat", "sag", ["bat", "bag", "sat", "dag", "dot"]));

// weds
/* You are given a network of n directed nodes, labeled from 1 to n. You are also given times, a list of directed edges where times[i] = (ui, vi, ti).
ui is the source node (an integer from 1 to n)
vi is the target node (an integer from 1 to n)
ti is the time it takes for a signal to travel from the source to the target node (an integer greater than or equal to 0).
You are also given an integer k, representing the node that we will send a signal from.
Return the minimum time it takes for all of the n nodes to receive the signal. If it is impossible for all the nodes to receive the signal, return -1 instead.

Example 1:
Input: times = [[1,2,1],[2,3,1],[1,4,4],[3,4,1]], n = 4, k = 1
Output: 3

Example 2:
Input: times = [[1,2,1],[2,3,1]], n = 3, k = 2
Output: -1
*/

// time: O(E log V), space: O(V + E)

function delay(times, n, k) {
  const edge = new Map();

  for (let i = 1; i <= n; i++) {
    edge.set(i, []);
  }

  for (const [u, v, w] of times) {
    edge.get(u).push([v, w]);
  }

  const minHeap = new MinPriorityQueue((entry) => entry[0]);
  minHeap.enqueue([0, k]);

  const visit = new Set();
  let t = 0;

  while (!minHeap.isEmpty()) {
    const [w1, n1] = minHeap.dequeue();
    if (visit.has(n1)) continue;
    visit.add(n1);
    t = w1;

    for (const [n2, w2] of edge.get(n1)) {
      if (!visit.has(n2)) {
        minHeap.enqueue([w1 + w2, n2]);
      }
    }
  }

  return visit.size === n ? t : -1;
}

console.log(
  delay(
    [
      [1, 2, 1],
      [2, 3, 1],
      [1, 4, 4],
      [3, 4, 1],
    ],
    4,
    1
  )
);
console.log(
  delay(
    [
      [1, 2, 1],
      [2, 3, 1],
    ],
    3,
    2
  )
);

// thurs
/* */

// time: O(), space: O()

function ___() {}

// fri
/* */

// time: O(), space: O()

function ___() {}
