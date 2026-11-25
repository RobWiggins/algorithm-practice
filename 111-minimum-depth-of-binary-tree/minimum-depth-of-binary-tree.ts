function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    const queue: TreeNode[] = [root];
    let depth = 1;

    while (queue.length > 0) {
        // How many nodes are on the current level?
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;

            // The first leaf we find has the minimum depth
            if (node.left === null && node.right === null) {
                return depth;
            }

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        // Finished this level; move to the next
        depth++;
    }

    return 0;
}