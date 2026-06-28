function findTheDifference(s: string, t: string): string {

    const charCount = new Map<string, number>()

    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }

    for (const char of t) {
        const count = charCount.get(char) || 0

        if (count === 0) {
            return char
        }

        charCount.set(char, count - 1)
    }

    return ''
}
