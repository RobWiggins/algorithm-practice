function removeDuplicates(nums: number[]): number {

    const seen = new Set()

    for (let i = nums.length - 1; i >= 0; i--) {
        if (seen.has(nums[i])) {
            nums.splice(i, 1)
        } else {
            seen.add(nums[i])
        }
    }

    return nums.length

};