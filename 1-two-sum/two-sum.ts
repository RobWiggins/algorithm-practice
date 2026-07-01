function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        numsMap.set(i, nums[i])
    }

    for (let i = 0; i < nums.length; i++) {
        let needed = target - numsMap.get(i)
        for (let j = 0; j < nums.length; j++) {
            if ((i !== j) && numsMap.get(i) + numsMap.get(j) === target) {
                return [i, j]
            }
        }
    }

    return [-1, -1]
};