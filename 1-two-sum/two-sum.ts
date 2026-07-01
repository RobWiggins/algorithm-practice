function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        numsMap.set(nums[i], i)
    }

    for (let i = 0; i < nums.length; i++) {
        let needed = target - nums[i]
        
            if (numsMap.has(needed) && numsMap.get(needed) !== i) {
                return [i, numsMap.get(needed)]
            }
        }

    return []
};