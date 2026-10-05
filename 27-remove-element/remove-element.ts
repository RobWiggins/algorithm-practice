function removeElement(nums: number[], val: number): number {
    let k = nums.length
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = undefined
            k--
        }
    }

    nums.sort()

    return k
};