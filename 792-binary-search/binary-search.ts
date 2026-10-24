function search(nums: number[], target: number): number {
    
    let high = nums.length - 1
    let low = 0
    let mid = high - Math.floor((high - low) / 2)

    while (low <= high) {

        let mid = Math.floor((low + high) / 2)

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1
        } else if (nums[mid] > target) {
            high = mid - 1
            // mid = mid - Math.floor((mid - low) / 2)
        }

        // console.log(low, mid, high)
    }

    return -1
};
