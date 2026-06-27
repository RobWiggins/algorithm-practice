function missingNumber(nums: number[]): number {
    const seen = Array(nums.length + 1).fill(-1)

    for (let i = 0; i < nums.length; i++) {
        seen[nums[i]] = nums[i]
    }

    for (let i = 0; i < seen.length; i++) {
        if (seen[i] === -1) {
            return i
        }
    }
};