function thirdMax(nums: number[]): number {
    nums.sort()
    const noDupesArr = [...new Set(nums)].sort((a, b) => a - b)
    console.log(noDupesArr)
    if (noDupesArr.length < 3) {
        return noDupesArr.at(noDupesArr.length - 1)
    } else {
        return noDupesArr.at(-3)
    }
};
