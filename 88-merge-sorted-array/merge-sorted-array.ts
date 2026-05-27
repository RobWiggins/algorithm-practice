/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    // Keep only the first m real numbers in nums1
    nums1.splice(m);

    // Add all numbers from nums2 into nums1
    nums1.push(...nums2);

    // Sort numerically in non-decreasing order
    nums1.sort((a, b) => a - b);
};