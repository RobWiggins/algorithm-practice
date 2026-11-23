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

function sumOfLeftLeaves(root: TreeNode | null): number {
    
    let total = 0

    function traverse(node: TreeNode | null, isLeft: boolean): number {
        if (node === null) {
            return
        }

        if (node.left === null && node.right === null && isLeft) {
            total += node.val
        }

        traverse(node.left, true)
        traverse(node.right, false) 
    }

    traverse(root, false)

    return total
};
