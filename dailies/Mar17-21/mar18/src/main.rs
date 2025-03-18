fn main() {
    let tri = vec![[2],[3,4],[6,5,7],[4,1,8,3]];
    println!("{}", min_total(tri));

    let angle = vec![[-10]];
    println!("{}", min_total(angle));
}

/* Given a triangle array, return the minimum path sum from top to bottom.
For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

Example 1:
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

Example 2:
Input: triangle = [[-10]]
Output: -10
*/

fn min_total( triangle: Vec<Vec<i32>>) -> i32 {
    let mut dp = triangle[triangle.len() - 1].clone();

    for i in (0..triangle.len() - 1).rev() {
        for j in 0..triangle[i].len() {
                dp[j] = triangle[i][j] + dp[j].min(dp[j + 1]);
            }
        }
    return dp[0];
}

// Time: O(n^2), O(n)
