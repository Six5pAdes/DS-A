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

// console.log(solveNQueen(4));
// console.log(solveNQueen(1));

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
    // tues
    // this.children = new Map();
    // this.endOfWord = false;

    // weds
    // this.children = Array(26).fill(null);
    // this.word = false;

    // thurs
    this.children = Array(26).fill(null);
    this.idx = -1;
    this.refs = 0;
  }

  addWord(word, i) {
    let curr = this;
    curr.refs++;

    for (const l of word) {
      const idx = l.charCodeAt(0) - "a".charCodeAt(0);
      if (curr.children[idx] === null) {
        curr.children[idx] = new TrieNode();
      }

      curr = curr.children[idx];
      curr.refs++;
    }

    curr.idx = i;
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
/* Design a data structure that supports adding new words and searching for existing words.

Implement the WordDictionary class:
void addWord(word) Adds word to the data structure.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

Example 1:

Input:
["WordDictionary", "addWord", "day", "addWord", "bay", "addWord", "may", "search", "say", "search", "day", "search", ".ay", "search", "b.."]

Output:
[null, null, null, null, false, true, true, true]

Explanation:
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("day");
wordDictionary.addWord("bay");
wordDictionary.addWord("may");
wordDictionary.search("say"); // return false
wordDictionary.search("day"); // return true
wordDictionary.search(".ay"); // return true
wordDictionary.search("b.."); // return true
 */

// time: O(n), space: O(t + n)

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  getIndex(c) {
    return c.charCodeAt(0) - "a".charCodeAt(0);
  }

  addWord(word) {
    let curr = this.root;
    for (let l of word) {
      const idx = this.getIndex(l);
      if (curr.children[idx] === null) {
        curr.children[idx] = new TrieNode();
      }

      curr = curr.children[idx];
    }

    curr.word = true;
  }

  search(word) {
    return this.dfs(word, 0, this.root);
  }

  dfs(word, j, root) {
    let curr = root;

    for (let i = j; i < word.length; i++) {
      const c = word[i];
      if (c === ".") {
        for (const child of curr.children) {
          if (child !== null && this.dfs(word, i + 1, child)) return true;
        }

        return false;
      } else {
        const idx = this.getIndex(c);
        if (curr.children[idx] === null) return false;
        curr = curr.children[idx];
      }
    }

    return curr.word;
  }
}

// thurs
/* Given a 2-D grid of characters board and a list of strings words, return all words that are present in the grid.

For a word to be present it must be possible to form the word with a path in the board with horizontally or vertically neighboring cells. The same cell may not be used more than once in a word.

Example 1:
Input:
board = [
  ["a","b","c","d"],
  ["s","a","a","t"],
  ["a","c","k","e"],
  ["a","c","d","n"]
],
words = ["bat","cat","back","backend","stack"]
Output: ["cat","back","backend"]

Example 2:
Input:
board = [
  ["x","o"],
  ["x","o"]
],
words = ["xoxo"]
Output: []
*/
// time: O(m * n * 4 * (3^(t-1)) + s), space: O(s)

class WordSearchII {
  findWords(board, words) {
    const root = new TrieNode();

    for (let i = 0; i < words.length; i++) {
      root.addWord(words[i], i);
    }

    const rows = board.length,
      cols = board[0].length;
    const res = [];

    const dfs = (r, c, node) => {
      if (
        r < 0 ||
        c < 0 ||
        r >= rows ||
        c >= cols ||
        board[r][c] === "*" ||
        node.children[this.getId(board[r][c])] === null
      ) {
        return;
      }

      let temp = board[r][c];
      board[r][c] = "*";
      let prev = node;
      node = node.children[this.getId(temp)];
      if (node.idx !== -1) {
        res.push(words[node.idx]);
        node.idx = -1;
        node.refs--;

        if (node.refs === 0) {
          prev.children[this.getId(temp)] = null;
          node = null;
          board[r][c] = temp;
          return;
        }
      }

      dfs(r + 1, c, node);
      dfs(r - 1, c, node);
      dfs(r, c + 1, node);
      dfs(r, c - 1, node);

      board[r][c] = temp;
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dfs(r, c, root);
      }
    }

    return Array.from(res);
  }

  getId(c) {
    return c.charCodeAt(0) - "a".charCodeAt(0);
  }
}

// fri
/* Given a 2D grid grid where '1' represents land and '0' represents water, count and return the number of islands.
An island is formed by connecting adjacent lands horizontally or vertically and is surrounded by water. You may assume water is surrounding the grid (i.e., all the edges are water).

Example 1:
Input: grid = [
    ["0","1","1","1","0"],
    ["0","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
Output: 1

Example 2:
Input: grid = [
    ["1","1","0","0","1"],
    ["1","1","0","0","1"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
Output: 4
*/

// time & space: O(m * n)

function numIslands(grid) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const rows = grid.length,
    cols = grid[0].length;
  let islands = 0;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
      return;
    }

    grid[r][c] = "0";
    for (const [dr, dc] of directions) {
      dfs(r + dr, c + dc);
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        dfs(r, c);
        islands++;
      }
    }
  }

  return islands;
}

console.log(
  numIslands([
    ["0", "1", "1", "1", "0"],
    ["0", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);

console.log(
  numIslands([
    ["1", "1", "0", "0", "1"],
    ["1", "1", "0", "0", "1"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
