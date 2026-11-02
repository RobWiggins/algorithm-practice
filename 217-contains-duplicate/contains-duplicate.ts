function containsDuplicate(nums: number[]): boolean {
    let arrMap = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        arrMap.set(nums[i], arrMap.get(nums[i]) + 1 || 1)
    }

    for (const val of arrMap.values()) {
        if (val >= 2) {
            return true
        }
    }

    return false
};