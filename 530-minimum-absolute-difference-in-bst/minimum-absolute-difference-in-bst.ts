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

function getMinimumDifference(root: TreeNode | null): number {

    if (root === null) {
        return 0
    }

    const result: number[] = []
    const queue: TreeNode[] = [root]

    while (queue.length > 0) {
        const node = queue.shift()!
        result.push(node.val)

        if (node.left) {
            queue.push(node.left)
        }

        if (node.right) {
            queue.push(node.right)
        }
    }

    return getMin(result)
};

function getMin(nums: number[]): number {

    nums.sort((a, b) => b - a)

    let currentMin = Infinity
    let idxB = 1
    for (let idxA = 0; idxA < nums.length; idxA++) {
        currentMin = Math.min(currentMin, Math.abs(nums[idxA] - nums[idxB]))
        
        idxB++
        if (idxB >= nums.length) {
            return currentMin
        }
    }

    return currentMin
}
