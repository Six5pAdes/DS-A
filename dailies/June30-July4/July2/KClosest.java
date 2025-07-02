import java.util.PriorityQueue;
import java.util.Arrays;

/*
You are given an 2-D array points where points[i] = [xi, yi] represents the coordinates of a point on an X-Y axis plane. You are also given an integer k.
Return the k closest points to the origin (0, 0).

The distance between two points is defined as the Euclidean distance (sqrt((x1 - x2)^2 + (y1 - y2)^2)).
You may return the answer in any order.

Example 1:
Input: points = [[0,2],[2,2]], k = 1
Output: [[0,2]]
Explanation : The distance between (0, 2) and the origin (0, 0) is 2. The distance between (2, 2) and the origin is sqrt(2^2 + 2^2) = 2.82842. So the closest point to the origin is (0, 2).

Example 2:
Input: points = [[0,2],[2,0],[2,2]], k = 2
Output: [[0,2],[2,0]]
Explanation: The output [2,0],[0,2] would also be accepted.
*/

// time: O(n log k), space: O(k)

public class KClosest {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>(
            (a, b) -> Integer.compare(
                b[0] * b[0] + b[1] * b[1],
            a[0] * a[0] + a[1] * a[1]
            )
        );

        for (int[] p : points) {
            maxHeap.offer(p);
            if (maxHeap.size() > k) {
                maxHeap.poll();
            }
        }

        int[][] res = new int[k][2];
        int i = 0;
        while (!maxHeap.isEmpty()) {
            res[i++] = maxHeap.poll();
        }
        return res;
    }

    public static void main(String[] args) {
        KClosest solver = new KClosest();
        int[][] res1 = solver.kClosest(new int[][] { {0,2}, {2,2} }, 1);
        System.out.println("Result 1: " + Arrays.deepToString(res1));
        int[][] res2 = solver.kClosest(new int[][] { {0,2}, {2,0}, {2,2} }, 2);
        System.out.println("Result 2: " + Arrays.deepToString(res2));
    }
}
