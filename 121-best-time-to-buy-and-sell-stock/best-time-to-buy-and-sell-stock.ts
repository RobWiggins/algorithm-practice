function maxProfit(prices: number[]): number {

    let leftIdx = 0
    let rightIdx = 1
    let max = 0

    while (rightIdx < prices.length) {
        if (prices[rightIdx] < prices[leftIdx]) {
            // found a cheaper buying price
            leftIdx = rightIdx
        } else {
            const currentProfit = prices[rightIdx] - prices[leftIdx]
            max = Math.max(max, currentProfit)
        }
        
        rightIdx++
    }

    return max
};