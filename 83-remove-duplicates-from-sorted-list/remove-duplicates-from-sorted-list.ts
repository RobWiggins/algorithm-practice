function deleteDuplicates(head: ListNode | null): ListNode | null {
    const seenSet = new Set<number>()
    const newList = new ListNode()
    let tail = newList

    while (head !== null) {
        if (!seenSet.has(head.val)) {
            seenSet.add(head.val)

            // Attach this node after the last kept node.
            tail.next = head

            // Move the tail forward.
            tail = head
        }

        head = head.next
    }

    // Disconnect any trailing duplicates.
    tail.next = null

    return newList.next
}