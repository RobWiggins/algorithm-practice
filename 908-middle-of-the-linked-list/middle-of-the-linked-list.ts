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
    // brute force, count how many nodes are in list

    const nodeMap = new Map<number, ListNode>()
    let idx = 0
    let prev = null

    while (head !== null) {
        nodeMap.set(idx, head)
        idx++
        head = head.next
    }

    console.log(nodeMap)

   return nodeMap.get(Math.floor((idx) / 2))
};