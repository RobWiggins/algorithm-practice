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

function maxDepth(root: TreeNode | null): number {

    function traverse(node: TreeNode | null): number {
        if (node === null) {
            return 0
        }

        const maxDepthLeft = traverse(node.left)
        const maxDepthRight = traverse(node.right)

        return 1 + Math.max(maxDepthLeft, maxDepthRight)
    }
    
    return traverse(root)
};