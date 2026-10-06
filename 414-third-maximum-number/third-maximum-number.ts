function thirdMax(nums: number[]): number {
    const noDupesArr = [...new Set(nums)].sort((a, b) => a - b)

    if (noDupesArr.length < 3) {
        return noDupesArr.at(noDupesArr.length - 1)
    } else {
        return noDupesArr.at(-3)
    }
};
