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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let sum = 0
  
  function compareSum(node: TreeNode | null, remaining: number): boolean {

    if (node === null) {
      return false
    }

    remaining -= node.val

    if (node.left === null && node.right === null) {
      return remaining === 0
    }

    return (compareSum(node.left, remaining) || compareSum(node.right, remaining))
  }

  return compareSum(root, targetSum)
};