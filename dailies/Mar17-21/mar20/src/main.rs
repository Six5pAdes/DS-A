fn main() {
    let vec = vec![vec![0, 0, 0], vec![0, 1, 0], vec![0, 0, 0]];
    println!("{}", unique_paths(vec));

    let tor = vec![vec![0, 1], vec![0, 0]];
    println!("{}", unique_paths(tor));
}

/* You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.
Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The testcases are generated so that the answer will be less than or equal to 2 * 109.

Example 1:
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

Example 2:
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
*/

fn unique_paths(obs_grid: Vec<Vec<i32>>) -> i32 {
    let m = obs_grid.len();
    let n = obs_grid[0].len();
    let mut dp = vec![vec![0; n]; m];
    dp[0][0] = 1;

    for i in 0..m {
        for j in 0..n {
            if obs_grid[i][j] == 1 {
                dp[i][j] = 0;
            } else {
                if i > 0 {
                    dp[i][j] += dp[i - 1][j];
                }
                if j > 0 {
                    dp[i][j] += dp[i][j - 1];
                }
            }
        }
    }

    dp[m - 1][n - 1]
}

// Time: O(m*n), Space: O(m*n)
