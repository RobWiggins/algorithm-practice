/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
    let balanced = true

    function traverse(node: TreeNode | null): number {
        if (node === null) {
            return 0
        }

        const leftHeight = traverse(node.left)
        const rightHeight = traverse(node.right)

        if (Math.abs(leftHeight - rightHeight) > 1) {
            balanced = false
        }

        return 1 + Math.max(leftHeight, rightHeight)
    }

    traverse(root)
    return balanced
}