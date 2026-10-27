function longestPalindrome(s: string): number {
    
    // build map of chars in string
    const charsMap = new Map<String, number>()
    for (const char of s) {
        charsMap.set(char, (charsMap.get(char) ?? 0) + 1)
    }

    let largestOddCount = 0
    let evenCount = 0
    let hasOdd = false
    for (const [_, value] of charsMap) {
        if ((value % 2) === 0) {
            evenCount += value
        }

        if ((value % 2) === 1) {
            hasOdd = true
            evenCount += value - 1
        }
    }

    return evenCount + (hasOdd ? 1 : 0)
};