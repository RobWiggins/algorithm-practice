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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let foundMatch = false
  const collectiveSet = new Set()
  let intersectedNode = null

  while (headA !== null) {
    collectiveSet.add(headA)
    headA = headA.next
  }

  while (headB !== null) {
    if (collectiveSet.has(headB)) {
      intersectedNode = headB
      break
    }
    collectiveSet.add(headB)
    headB = headB.next
  }

  return intersectedNode
};