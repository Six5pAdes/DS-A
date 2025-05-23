/* Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

Example 1:
Input: head = [0,1,2,3]
Output: [3,2,1,0]

Example 2:
Input: head = []
Output: []
*/

public class mayTwentyThree {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode hold = curr.next;
            curr.next = prev;
            prev = curr;
            curr = hold;
        }

        return prev;
    }

    public static void main(String[] args) {
        mayTwentyThree solution = new mayTwentyThree();

        System.out.println(solution.reverseList(new ListNode[]{0,1,2,3}));
        System.out.println(solution.reverseList(new ListNode[]{}));
    }
}

// Time: O(n), O(1)
