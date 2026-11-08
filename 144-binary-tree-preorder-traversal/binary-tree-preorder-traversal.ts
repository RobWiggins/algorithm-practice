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

function preorderTraversal(root: TreeNode | null): number[] {

    let preorder = []
    function traverse(node: TreeNode | null): number[] {
        if (node === null) {
            return preorder
        }
        
        preorder.push(node.val)

        traverse(node.left)
        traverse(node.right)

        return preorder
    }

    return traverse(root)
    
};