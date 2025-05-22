/*You are given two integer arrays nums1 and nums2 of size m and n respectively, where each is sorted in ascending order. Return the median value among all elements of the two arrays.

Your solution must run in O(log(m+n)) time.

Example 1:
Input: nums1 = [1,2], nums2 = [3]
Output: 2.0
Explanation: Among [1, 2, 3] the median is 2.

Example 2:
Input: nums1 = [1,3], nums2 = [2,4]
Output: 2.5
Explanation: Among [1, 2, 3, 4] the median is (2 + 3) / 2 = 2.5.
*/

public class mayTwentyOne {
    public double medianInArr(int[] nums1, int[] nums2) {
        int[] a = nums1;
        int[] b = nums2;
        int total = a.length + b.length;
        int half = (total + 1) / 2;

        if (b.length < a.length) {
            int[] temp = a;
            a = b;
            b = temp;
        }

        int l = 0;
        int r = a.length;

        while (l <= r) {
            int i = (l + r) / 2;
            int j = half - i;

            int aleft = i > 0 ? a[i - 1] : Integer.MIN_VALUE;
            int aright = i < a.length ? a[i] : Integer.MAX_VALUE;
            int bleft = j > 0 ? b[j - 1] : Integer.MIN_VALUE;
            int bright = j < b.length ? b[j] : Integer.MAX_VALUE;

            if (aleft <= bright && bleft <= aright) {
                if (total % 2 != 0) {
                    return Math.max(aleft, bleft);
                }
                return (Math.max(aleft, bleft) + Math.min(aright, bright)) / 2.0;
            } else if (aleft > bright) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        mayTwentyOne solution = new mayTwentyOne();

        System.out.println(solution.medianInArr(new int[][1, 2], new int[][3]));
        System.out.println(solution.medianInArr(new int[][1, 3], new int[][2, 4]));
    }
}

// Time: O(log(m+n)), Space: O(1)
