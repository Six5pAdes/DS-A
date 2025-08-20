// mon
/* You are given a square 2-D matrix of distinct integers grid where each integer grid[i][j] represents the elevation at position (i, j).

Rain starts to fall at time = 0, which causes the water level to rise. At time t, the water level across the entire grid is t.
You may swim either horizontally or vertically in the grid between two adjacent squares if the original elevation of both squares is less than or equal to the water level at time t.

Starting from the top left square (0, 0), return the minimum amount of time it will take until it is possible to reach the bottom right square (n - 1, n - 1).

Example 1:
Input: grid = [[0,1],[2,3]]
Output: 3
Explanation: For a path to exist to the bottom right square grid[1][1] the water elevation must be at least 3. At time t = 3, the water level is 3.

Example 2:
Input: grid = [
  [0,1,2,10],
  [9,14,4,13],
  [12,3,8,15],
  [11,5,7,6]
]
Output: 8
Explanation: The water level must be at least 8 to reach the bottom right square. The path is [0, 1, 2, 4, 8, 7, 6].
*/

// time: O((n^2) log n), space: O(n^2)

function swimming(grid) {
  const n = grid.length;
  const que = Array.from({ length: n }, () => Array(n).fill(false));

  let minH = grid[0][0],
    maxH = grid[0][0];

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      maxH = Math.max(maxH, grid[row][col]);
      minH = Math.min(minH, grid[row][col]);
    }
  }

  const dfs = (node, t) => {
    const [r, c] = node;

    if (
      Math.max(r, c) >= n ||
      Math.min(r, c) < 0 ||
      que[r][c] ||
      grid[r][c] > t
    )
      return false;
    if (r === n - 1 && c === n - 1) return true;

    que[r][c] = true;

    return (
      dfs([r + 1, c], t) ||
      dfs([r - 1, c], t) ||
      dfs([r, c + 1], t) ||
      dfs([r, c - 1], t)
    );
  };

  let l = minH,
    r = maxH;

  while (l < r) {
    let m = (l + r) >> 1;
    if (dfs([0, 0], m)) {
      r = m;
    } else {
      l = m + 1;
    }

    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        que[row][col] = false;
      }
    }
  }

  return r;
}

// console.log(
//   swimming([
//     [0, 1],
//     [2, 3],
//   ])
// );
// console.log(
//   swimming([
//     [0, 1, 2, 10],
//     [9, 14, 4, 13],
//     [12, 3, 8, 15],
//     [11, 5, 7, 6],
//   ])
// );

// tues
/* There is a foreign language which uses the latin alphabet, but the order among letters is not "a", "b", "c" ... "z" as in English.
You receive a list of non-empty strings words from the dictionary, where the words are sorted lexicographically based on the rules of this new language.
Derive the order of letters in this language. If the order is invalid, return an empty string. If there are multiple valid order of letters, return any of them.

A string a is lexicographically smaller than a string b if either of the following is true:
The first letter where they differ is smaller in a than in b.
a is a prefix of b and a.length < b.length.

Example 1:
Input: ["z","o"]
Output: "zo"
Explanation:
From "z" and "o", we know 'z' < 'o', so return "zo".

Example 2:
Input: ["hrn","hrf","er","enn","rfnn"]
Output: "hernf"
Explanation:
from "hrn" and "hrf", we know 'n' < 'f'
from "hrf" and "er", we know 'h' < 'e'
from "er" and "enn", we know get 'r' < 'n'
from "enn" and "rfnn" we know 'e'<'r'
so one possible solution is "hernf"
 */

// time: O(N + V + E), space: O(V + E)

function dictionary(words) {
  const adj = {};
  for (const word of words) {
    for (const w of word) {
      adj[w] = new Set();
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);

    if (w1.length > w2.length && w2.slice(0, minLen) === w1.slice(0, minLen)) {
      return "";
    }

    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        adj[w1[j]].add(w2[j]);
        break;
      }
    }
  }

  const visit = {};
  const res = [];

  const dfs = (char) => {
    if (char in visit) return visit[char];
    visit[char] = true;

    for (const neigh of adj[char]) {
      if (dfs(neigh)) return true;
    }

    visit[char] = false;
    res.push(char);
    return false;
  };

  for (const char in adj) {
    if (dfs(char)) return "";
  }

  res.reverse();
  return res.join("");
}

// console.log(dictionary(["z", "o"]));
// console.log(dictionary(["hrn", "hrf", "er", "enn", "rfnn"]));

// weds
/* There are n airports, labeled from 0 to n - 1, which are connected by some flights. You are given an array flights where flights[i] = [from_i, to_i, price_i] represents a one-way flight from airport from_i to airport to_i with cost price_i. You may assume there are no duplicate flights and no flights from an airport to itself.

You are also given three integers src, dst, and k where:
src is the starting airport
dst is the destination airport
src != dst
k is the maximum number of stops you can make (not including src and dst)

Return the cheapest price from src to dst with at most k stops, or return -1 if it is impossible.

Example 1:
Input: n = 4, flights = [[0,1,200],[1,2,100],[1,3,300],[2,3,100]], src = 0, dst = 3, k = 1
Output: 500
Explanation:
The optimal path with at most 1 stop from airport 0 to 3 is shown in red, with total cost 200 + 300 = 500.
Note that the path [0 -> 1 -> 2 -> 3] costs only 400, and thus is cheaper, but it requires 2 stops, which is more than k.

Example 2:
Input: n = 3, flights = [[1,0,100],[1,2,200],[0,2,100]], src = 1, dst = 2, k = 1
Output: 200
Explanation:
The optimal path with at most 1 stop from airport 1 to 2 is shown in red and has cost 200.
*/

// time: O(n + (m * k)), space: O(n)

function cheapest(n, flights, src, dst, k) {
  let prices = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  prices[src] = 0;

  for (let i = 0; i <= k; i++) {
    const temP = [...prices];

    for (const flight of flights) {
      const s = flight[0];
      const r = flight[1];
      const c = flight[2];

      if (prices[s] === Number.MAX_SAFE_INTEGER) continue;
      if (prices[s] + c < temP[r]) temP[r] = prices[s] + c;
    }

    prices = temP;
  }

  return prices[dst] === Number.MAX_SAFE_INTEGER ? -1 : prices[dst];
}

console.log(
  cheapest(
    4,
    [
      [0, 1, 200],
      [1, 2, 100],
      [1, 3, 300],
      [2, 3, 100],
    ],
    0,
    3,
    1
  )
);
console.log(
  cheapest(
    3,
    [
      [1, 0, 100],
      [1, 2, 200],
      [0, 2, 100],
    ],
    1,
    2,
    1
  )
);

// thurs
/* */

// time: O(), space: O()

function ____() {}

// fri
/* */

// time: O(), space: O()

function ____() {}
