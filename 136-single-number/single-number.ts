function singleNumber(nums: number[]): number {
    const collection = new Map<number, number>()
    
    for (let num of nums) {
        collection.set(num, (collection.get(num) ?? 0) + 1)
    }

    let singleUnique
    for (const [num, occurence] of collection.entries()) {
        if (occurence !== 2) {
            singleUnique = num
        }
    }

    return singleUnique
};