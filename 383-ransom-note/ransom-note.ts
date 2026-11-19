function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineChars = new Map<string, number>()

    for (let char of magazine) {
        magazineChars.set(char, magazineChars.get(char) + 1 || 1)
    }

    for (let char of ransomNote) {
        if (magazineChars.get(char)) {
            magazineChars.set(char, magazineChars.get(char) - 1)
        } else {
            return false
        }
    }

    return true
};
