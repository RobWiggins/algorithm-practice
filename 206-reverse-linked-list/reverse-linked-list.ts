/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    // Stop at an empty list or the last node.
    if (head === null || head.next === null) {
        return head
    }

    // Reverse everything after the current node
    const newHead = reverseList(head.next)

    // Make the next node point back to the current node
    head.next.next = head

    // Remove the current node's original forward link
    head.next = null

    return newHead
};