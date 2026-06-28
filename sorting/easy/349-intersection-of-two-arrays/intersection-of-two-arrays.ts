function intersection(nums1: number[], nums2: number[]): number[] {
  const nums1Set = new Set(nums1)
  const result = new Set<number>()

  for (const num of nums2) {
    if (nums1Set.has(num)) {
        result.add(num)
    }
  }

  return Array.from(result)
}


/**
* Less efficient two pointer technique.
* 
*
function intersection(nums1: number[], nums2: number[]): number[] {
    
    const nums1Sorted = nums1.toSorted((a, b) => a - b)
    const nums2Sorted = nums2.toSorted((a, b) => a - b)

    let ptr1 = 0
    let ptr2 = 0
    const intersectionSet: Set<number> = new Set()

    while (ptr1 < nums1Sorted.length && ptr2 < nums2Sorted.length) {
        if (nums1Sorted[ptr1] === nums2Sorted[ptr2]) {
            intersectionSet.add(nums1Sorted[ptr1])
            ptr1++
            ptr2++
        } else if (nums1Sorted[ptr1] < nums2Sorted[ptr2]) {
            ptr1++
        } else {
            ptr2++
        }
    }
    
    return Array.from(intersectionSet)
};
*/