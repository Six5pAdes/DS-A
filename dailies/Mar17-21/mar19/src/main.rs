/* Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.

Example 1:
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:
Input: grid = [[1,2,3],[4,5,6]]
Output: 12
*/

fn main() {
    let grid = vec![vec![1, 3, 1], vec![1, 5, 1], vec![4, 2, 1]];
    println!("{}", min_path(grid));
    let grid = vec![vec![1, 2, 3], vec![4, 5, 6]];
    println!("{}", min_path(grid));
}

fn min_path(grid: Vec<Vec<i32>>) -> i32 {
    let mut dp = vec![vec![0; grid[0].len()]; grid.len()];
    dp[0][0] = grid[0][0];

    for i in 1..grid.len() {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    for j in 1..grid[0].len() {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    for i in 1..grid.len() {
        for j in 1..grid[0].len() {
            dp[i][j] = grid[i][j] + std::cmp::min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    dp[grid.len() - 1][grid[0].len() - 1]
}

// Time: O(m*n), Space: O(m*n)
