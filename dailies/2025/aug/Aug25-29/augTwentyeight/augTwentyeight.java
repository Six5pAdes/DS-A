/* Given a string s, return the number of substrings within s that are palindromes.
A palindrome is a string that reads the same forward and backward.

Example 1:
Input: s = "abc"
Output: 3
Explanation: "a", "b", "c".

Example 2:
Input: s = "aaa"
Output: 6
*/

// time: O(n^2), space: O(1)

public class augTwentyeight {
    public int countSubstrings(String s) {
        int res = 0;

        for (int i = 0; i < s.length(); i++) {
            int l = i, r = i;

            while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
                res++;
                l--;
                r++;
            }

            l = i;
            r = i + 1;

            while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
                res++;
                l--;
                r++;
            }
        }

        return res;
    }

    public static void main(String[] args) {
        augTwentyeight solution = new augTwentyeight();
        System.out.println(solution.countSubstrings("abc"));
        System.out.println(solution.countSubstrings("aaa"));
    }
}
