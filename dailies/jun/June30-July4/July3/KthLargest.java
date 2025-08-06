import java.util.PriorityQueue;

/*
Given an unsorted array of integers nums and an integer k, return the kth largest element in the array.
By kth largest element, we mean the kth largest element in the sorted order, not the kth distinct element.

Follow-up: Can you solve it without sorting?

Example 1:
Input: nums = [2,3,1,5,4], k = 2
Output: 4

Example 2:
Input: nums = [2,3,1,1,5,5,4], k = 3
Output: 4
*/

// time: O(n log k), space: O(k)

public class KthLargest {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (int n : nums) {
            minHeap.offer(n);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        return minHeap.peek();
    }

    public static void main(String[] args) {
        KthLargest solution = new KthLargest();
        int res1 = solution.findKthLargest(new int[]{2,3,1,5,4}, 2);
        System.out.println("Result 1: " + res1);
        int res2 = solution.findKthLargest(new int[]{2,3,1,1,5,5,4}, 3);
        System.out.println("Result 2: " + res2);
    }
}
