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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0

    function traverse(root: TreeNode | null): number {
        if (root === null) {
            return 0
        }
        

        let leftHeight = traverse(root.left)
        let rightHeight = traverse(root.right)
   
        let thisMax = 0
        let max = 0

        // Longest path passing through this node
        const thisDiameter = leftHeight + rightHeight

        maxDiameter = Math.max(maxDiameter, thisDiameter)

        // Return the height of this subtree to its parent.
        return 1 + Math.max(leftHeight, rightHeight)
    }

    traverse(root)

    return maxDiameter

};