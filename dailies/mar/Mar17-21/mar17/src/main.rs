fn main() {
    let nums = vec![10,9,2,5,3,7,101,18];
    println!("{}", len_of_list(nums));

    let nums2 = vec![0, 1, 0, 3, 2, 3];
    println!("{}", len_of_list(nums2));

    println!("{}", len_of_list(vec![7, 7, 7, 7, 7, 7]))
}

/* Given an integer array nums, return the length of the longest strictly increasing subsequence.

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/

fn len_of_list(nums: Vec<i32>) -> i32 {
    let mut v: Vec<i32> = vec![*nums.first().unwrap()];

    for n in nums.iter() {
        if n > v.last().unwrap() {
            v.push(*n);
        } else {
            let pos = v.binary_search(n);
            if let Err(pos) = pos {
                if v[pos] > *n {
                    v[pos] = *n;
                }
            }
        }
    }

    v.len() as i32
}

// Time: O(n log n), Space: O(n)
