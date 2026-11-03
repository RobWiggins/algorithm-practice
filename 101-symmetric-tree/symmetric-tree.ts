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

function isSymmetric(root: TreeNode | null): boolean {

    if (root === null) {
        return true
    }
    
    function traverse(nodeLeft: TreeNode | null, nodeRight: TreeNode | null): boolean {
        if (nodeLeft === null && nodeRight === null) {
            return true
        }
        
        if (nodeLeft === null || nodeRight === null) {
            return false
        }

        if (nodeLeft.val !== nodeRight.val) {
            return false
        } else {
            return traverse(nodeLeft.left, nodeRight.right) && traverse(nodeLeft.right, nodeRight.left)
        }

        return true
    }

    return traverse(root.left, root.right)

};