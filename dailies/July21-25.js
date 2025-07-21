// mon
/* The n-queens puzzle is the problem of placing n queens on an n x n chessboard so that no two queens can attack each other.
A queen in a chessboard can attack horizontally, vertically, and diagonally.
Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a unique board layout where the queen pieces are placed.
'Q' indicates a queen and '.' indicates an empty space.
You may return the answer in any order.

Example 1:
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There are two different solutions to the 4-queens puzzle.

Example 2:
Input: n = 1
Output: [["Q"]]
*/

// time: O(n!), space: O(n^2)

function solveNQueen(n) {
  const cols = new Set();
  const posDiag = new Set();
  const negDiag = new Set();

  const res = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function backTrack(r) {
    if (r === n) {
      res.push(board.map((row) => row.join("")));
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
        continue;
      }

      cols.add(c);
      posDiag.add(r + c);
      negDiag.add(r - c);
      board[r][c] = "Q";

      backTrack(r + 1);

      cols.delete(c);
      posDiag.delete(r + c);
      negDiag.delete(r - c);
      board[r][c] = ".";
    }
  }

  backTrack(0);
  return res;
}

console.log(solveNQueen(4));
console.log(solveNQueen(1));

// tues

// weds

// thurs

// fri
