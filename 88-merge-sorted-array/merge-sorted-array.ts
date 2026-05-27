/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    
    // nums1.sort((a, b) => a - b)
    // nums2.sort((a, b) => a - b)

    // nums1.splice(-n)
    // nums1.splice(0, m)
    // nums2.splice(nums2.length - 1 - n, nums2.length - 1)

    // console.log('nums1', nums1)
    // console.log('nums2', nums2)

    // nums1.splice(0, m)
    // nums1.push(...nums2)

    // // console.log post splicing and pushing to combine arrays
    // console.log('nums1 combined', nums1)

    // nums1.sort((a, b) => a - b)


    // Keep only the first m real numbers in nums1
    nums1.splice(m);

    // Add all numbers from nums2 into nums1
    nums1.push(...nums2);

    // Sort numerically in non-decreasing order
    nums1.sort((a, b) => a - b);
};