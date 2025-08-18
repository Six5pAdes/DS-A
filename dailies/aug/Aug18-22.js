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

console.log(
  swimming([
    [0, 1],
    [2, 3],
  ])
);
console.log(
  swimming([
    [0, 1, 2, 10],
    [9, 14, 4, 13],
    [12, 3, 8, 15],
    [11, 5, 7, 6],
  ])
);

// tues
/* */

// time: O(), space: O()

function ____() {}

// weds
/* */

// time: O(), space: O()

function ____() {}

// thurs
/* */

// time: O(), space: O()

function ____() {}

// fri
/* */

// time: O(), space: O()

function ____() {}
