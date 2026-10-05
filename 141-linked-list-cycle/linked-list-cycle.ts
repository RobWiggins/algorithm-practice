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

function hasCycle(head: ListNode | null): boolean {
    let cycle = false
    const nodeSet =  new Set()

    while (head !== null && !cycle) {
                
        if (!nodeSet.has(head)) {
          nodeSet.add(head)
        } else {
            cycle = true
            break
        }
        
        head = head.next
    }

    return cycle
};