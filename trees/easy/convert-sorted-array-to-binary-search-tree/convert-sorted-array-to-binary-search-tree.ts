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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const build = (start, end) => {
        if (start === end) return null;
        
        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(nums[mid]);
        node.left = build(start, mid);
        node.right = build(mid + 1, end);
        return node;
    };
    return build(0, nums.length);
};