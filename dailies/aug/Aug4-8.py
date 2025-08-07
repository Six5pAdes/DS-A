# mon
'''You are given a 2-D matrix board containing 'X' and 'O' characters.
If a continuous, four-directionally connected group of 'O's is surrounded by 'X's, it is considered to be surrounded.
Change all surrounded regions of 'O's to 'X's and do so in-place by modifying the input board.

Example 1:

Input: board = [
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","O","O","X"],
  ["X","X","X","O"]
]

Output: [
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","X","X","O"]
]

Explanation: Note that regions that are on the border are not considered surrounded regions.
'''

# time & space: O(m * n)

def solve(board):
    rows, cols = len(board), len(board[0])

    def capture(r, c):
      if (r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != 'O'):
        return

      board[r][c] = 'T'
      capture(r + 1, c)
      capture(r - 1, c)
      capture(r, c + 1)
      capture(r, c - 1)

    for r in range(rows):
       if board[r][0] == 'O':
          capture(r, 0)
       if board[r][cols - 1] == 'O':
          capture(r, cols - 1)

    for c in range(cols):
       if board[0][c] == 'O':
          capture(0, c)
       if board[rows - 1][c] == 'O':
          capture(rows - 1, c)

    for r in range(rows):
       for c in range(cols):
          if board[r][c] == 'O':
             board[r][c] = 'X'
          elif board[r][c] == 'T':
             board[r][c] = 'O'

# print('this board becomes:', solve([
#   ["X","X","X","X"],
#   ["X","O","O","X"],
#   ["X","O","O","X"],
#   ["X","X","X","O"]
# ]))

# tues
'''You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a.

The pair [0, 1], indicates that must take course 1 before taking course 0.
There are a total of numCourses courses you are required to take, labeled from 0 to numCourses - 1.

Return true if it is possible to finish all courses, otherwise return false.

Example 1:
Input: numCourses = 2, prerequisites = [[0,1]]
Output: true
Explanation: First take course 1 (no prerequisites) and then take course 0.

Example 2:
Input: numCourses = 2, prerequisites = [[0,1],[1,0]]
Output: false
Explanation: In order to take course 1 you must take course 0, and to take course 0 you must take course 1. So it is impossible.
'''

# time & space: O(V + E)

def schedules(numCourses, prerequisites):
   queue = {i: [] for i in range(numCourses)}
   for course, pre in prerequisites:
      queue[course].append(pre)

   visiting = set()

   def dfs(course):
      if course in visiting:
         return False
      if queue[course] == []:
         return True

      visiting.add(course)
      for pre in queue[course]:
         if not dfs(pre):
            return False
      visiting.remove(course)
      queue[course] = []
      return True

   for c in range(numCourses):
      if not dfs(c):
         return False
   return True

# print(schedules(2, [[0,1]]))
# print(schedules(2, [[0,1],[1,0]]))

# weds
''' You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
There are a total of numCourses courses you are required to take, labeled from 0 to numCourses - 1.
Return a valid ordering of courses you can take to finish all courses. If there are many valid answers, return any of them. If it's not possible to finish all courses, return an empty array.

Example 1:
Input: numCourses = 3, prerequisites = [[1,0]]
Output: [0,1,2]
Explanation: We must ensure that course 0 is taken before course 1.

Example 2:
Input: numCourses = 3, prerequisites = [[0,1],[1,2],[2,0]]
Output: []
Explanation: It's impossible to finish all courses.
'''

# time & space: O(V + E)

def courseOrder(numCourses, prerequisites):
   adj = [[] for i in range(numCourses)]
   nth = [0] * numCourses

   for next, prereq in prerequisites:
      nth[next] += 1
      adj[prereq].append(next)

   output = []

   def dfs(node):
      output.append(node)
      nth[node] -= 1

      for neighbor in adj[node]:
         nth[neighbor] -= 1
         if nth[neighbor] == 0: dfs(neighbor)

   for i in range(numCourses):
      if nth[i] == 0: dfs(i)

   return output if len(output) == numCourses else []

# print(courseOrder(3, [[1,0]]))
# print(courseOrder(3, [[0,1],[1,2],[2,0]]))

# thurs
''' Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

Example 1:
Input:
n = 5
edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
Output:
true

Example 2:
Input:
n = 5
edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
Output:
false

Note:
You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
'''

# time & space: O(V + E)

def validTree(n, edges):
   if len(edges) > (n - 1): return False

   adj = [[] for _ in range(n)]
   for u, v in edges:
      adj[u].append(v)
      adj[v].append(u)

   visit = set()
   def dfs(node, par):
      if node in visit:
         return False

      visit.add(node)
      for neigh in adj[node]:
         if neigh == par:
            continue
         if not dfs(neigh, node):
            return False
      return True

   return dfs(0, -1) and len(visit) == n

print(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]))
print(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]))
# fri
