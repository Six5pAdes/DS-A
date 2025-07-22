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
/* A prefix tree (also known as a trie) is a tree data structure used to efficiently store and retrieve keys in a set of strings. Some applications of this data structure include auto-complete and spell checker systems.

Implement the PrefixTree class:
PrefixTree() Initializes the prefix tree object.
void insert(String word) Inserts the string word into the prefix tree.
boolean search(String word) Returns true if the string word is in the prefix tree (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

Example 1:

Input:
["Trie", "insert", "dog", "search", "dog", "search", "do", "startsWith", "do", "insert", "do", "search", "do"]

Output:
[null, null, true, false, true, null, true]

Explanation:
PrefixTree prefixTree = new PrefixTree();
prefixTree.insert("dog");
prefixTree.search("dog");    // return true
prefixTree.search("do");     // return false
prefixTree.startsWith("do"); // return true
prefixTree.insert("do");
prefixTree.search("do");     // return true
*/

// time: O(n), space: O(t)

class TrieNode {
  constructor() {
    this.children = new Map();
    this.endOfWord = false;
  }
}

class PrefixTree {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (let l of word) {
      if (!curr.children.has(l)) {
        curr.children.set(l, new TrieNode());
      }

      curr = curr.children.get(l);
    }

    curr.endOfWord = true;
  }

  search(word) {
    let curr = this.root;
    for (let l of word) {
      if (!curr.children.has(l)) {
        return false;
      }

      curr = curr.children.get(l);
    }

    return curr.endOfWord;
  }

  startsWith(prefix) {
    let curr = this.root;
    for (let l of prefix) {
      if (!curr.children.has(l)) {
        return false;
      }

      curr = curr.children.get(l);
    }

    return true;
  }
}

// weds

// thurs

// fri
