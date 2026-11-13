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

function postorderTraversal(root: TreeNode | null): number[] {

    const traversal: number[] = []

    function traverse(node: TreeNode | null): number {
        if (node === null) {
            return
        }

        traverse(node.left)
        traverse(node.right)
        traversal.push(node.val)
    }
    
    traverse(root)

    return traversal
};
