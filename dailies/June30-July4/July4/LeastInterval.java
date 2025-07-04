import java.util.PriorityQueue;
import java.util.Collections;
import java.util.Queue;
import java.util.LinkedList;

/*
You are given an array of CPU tasks tasks, where tasks[i] is an uppercase english character from A to Z. You are also given an integer n.
Each CPU cycle allows the completion of a single task, and tasks may be completed in any order.
The only constraint is that identical tasks must be separated by at least n CPU cycles, to cooldown the CPU.
Return the minimum number of CPU cycles required to complete all tasks.

Example 1:
Input: tasks = ["X","X","Y","Y"], n = 2
Output: 5
Explanation: A possible sequence is: X -> Y -> idle -> X -> Y.

Example 2:
Input: tasks = ["A","A","A","B","C"], n = 3
Output: 9
Explanation: A possible sequence is: A -> B -> C -> Idle -> A -> Idle -> Idle -> Idle -> A.
*/

// time: O(m), space: O(1)

public class LeastInterval {
    public int leastInterval(char[] tasks, int n) {
        int[] cnt = new int[26];
        for (char task : tasks) {
            cnt[task - 'A']++;
        }

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        for (int c : cnt) {
            if (c > 0) {
                maxHeap.add(c);
            }
        }

        int time = 0;
        Queue<int[]> q = new LinkedList<>();

        while (!maxHeap.isEmpty() || !q.isEmpty()) {
            time++;

            if (maxHeap.isEmpty()) {
                time = q.peek()[1];
            } else {
                int c = maxHeap.poll() - 1;
                if (c > 0) {
                    q.add(new int[]{c, time + n});
                }
            }

            if (!q.isEmpty() && q.peek()[1] == time) {
                maxHeap.add(q.poll()[0]);
            }
        }

        return time;
    }

    public static void main(String[] args) {
        LeastInterval solution = new LeastInterval();
        int res1 = solution.leastInterval(new char[]{'X', 'X', 'Y', 'Y'}, 2);
        System.out.println("result 1: " + res1);
        int res2 = solution.leastInterval(new char[]{'A', 'A', 'A', 'B', 'C'}, 3);
        System.out.println("result 2: " + res2);
    }
}
