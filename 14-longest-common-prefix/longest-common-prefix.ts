function longestCommonPrefix(strs: string[]): string {
    const sorted = strs.toSorted()

    const word1 = sorted[0]
    const word2 = sorted[sorted.length - 1]
    let idx = 0
    let prefix = ""

    while (idx < word1.length && idx < word2.length) {
        if (word1[idx] === word2[idx]) {
            prefix += word1[idx]
            idx++
        } else {
            break
        }
    }

    return prefix
};