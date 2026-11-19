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

function middleNode(head: ListNode | null): ListNode | null {
    
    let fastPtr = head
    let slowPtr = head

    while (fastPtr !== null && slowPtr !== null) {

        if (fastPtr.next === null) {
            fastPtr = fastPtr.next
            continue
        }

        slowPtr = slowPtr.next
        fastPtr = fastPtr.next.next
    }

    return slowPtr

};