fn main() {
    let str1 = String::from("babad");
    println!("{}", palindrome(str1));

    let str2 = String::from("cbbd");
    println!("{}", palindrome(str2));
}

/* Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
*/

fn palindrome(s: String) -> String {
    let s_chars: Vec<char> = s.chars().collect();
    let mut l = 0;
    let mut r = 0;

    fn breaker(s: &Vec<char>, mut i: isize, mut j: isize, l: &mut usize, r: &mut usize) {
        while i >= 0 && j < s.len() as isize && s[i as usize] == s[j as usize] {
            if (j - i) as usize > *r - *l {
                *l = i as usize;
                *r = j as usize;
            }

            i -= 1;
            j += 1;
        }
    }

    for i in 0..s.len() {
        breaker(&s_chars, i as isize, i as isize, &mut l, &mut r);
        breaker(&s_chars, i as isize, i as isize + 1, &mut l, &mut r);
    }

    s_chars[l..=r].iter().collect()
}

// Time: O(n^2), Space: O(n)
