/* Given a string s, return the longest substring of s that is a palindrome.
A palindrome is a string that reads the same forward and backward.
If there are multiple palindromic substrings that have the same length, return any one of them.

Example 1:
Input: s = "ababd"
Output: "bab"
Explanation: Both "aba" and "bab" are valid answers.

Example 2:
Input: s = "abbc"
Output: "bb"
*/

// time: O(n^2), space: O(1)

public class augTwentyseven {
    private String palindrome(String s) {
        int resLen = 0, resIdx = 0;

        for (int i = 0; i < s.length(); i++) {
            int l = i, r = i;

            while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
                if (r - l + 1 > resLen) {
                    resIdx = l;
                    resLen = r - l + 1;
                }

                l--;
                r++;
            }

            l = i;
            r = i + 1;

            while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
                if (r - l + 1 > resLen) {
                    resIdx = l;
                    resLen = r - l + 1;
                }

                l--;
                r++;
            }
        }

        return s.substring(resIdx, resIdx + resLen);
    }

    public static void main(String[] args) {
        augTwentyseven solution = new augTwentyseven();
        System.out.println(solution.palindrome("ababd"));
        System.out.println(solution.palindrome("abbc"));
    }
}
