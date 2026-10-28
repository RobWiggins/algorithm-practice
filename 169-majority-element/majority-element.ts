function majorityElement(nums: number[]): number {
    const sortedNums = nums.toSorted()
    return sortedNums[Math.floor(nums.length / 2)]
};