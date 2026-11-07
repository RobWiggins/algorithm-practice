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

function minDepth(root: TreeNode | null): number {
    
    if (root === null) { // todo can probably remove
        return 0
    }

    function traverse(node: TreeNode | null): number {

        if (node === null) {
            return 0
        }

        let leftHeight = traverse(node.left)
        let rightHeight = traverse(node.right)

        if (node.left === null) {
            return rightHeight + 1
        }
        if (node.right === null) {
            return leftHeight + 1
        }

        return Math.min(leftHeight, rightHeight) + 1
    }

    return traverse(root)
};