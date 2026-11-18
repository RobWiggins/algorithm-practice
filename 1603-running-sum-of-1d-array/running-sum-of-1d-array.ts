function runningSum(nums: number[]): number[] {
    
    let arr: number[] = []

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            arr[i] = nums[i]
            continue
        }

        arr.push(nums[i] + arr[i - 1])
    }

    return arr
};