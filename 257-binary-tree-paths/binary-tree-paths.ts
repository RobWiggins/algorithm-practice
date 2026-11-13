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

function binaryTreePaths(root: TreeNode | null): string[] {

    const arr: string[] = []

    function traverse(node: TreeNode | null, path: string): void {
        if (node === null) return

        const currentPath = path === ''
            ? String(node.val)
            : `${path}->${node.val}`

        if (node.left === null && node.right === null) {
            arr.push(currentPath)
            return
        }

        traverse(node.left, currentPath)
        traverse(node.right, currentPath)
    }

    traverse(root, '')
    return arr
};