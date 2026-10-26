function canConstruct(ransomNote: string, magazine: string): boolean {
    // return false if magazine char length is less than ransomNote
    if (magazine.length < ransomNote.length) {
        return false
    }

    const magCharMap = new Map<String, number>()
    for (const char of magazine) {
        magCharMap.set(char, (magCharMap.get(char) || 0) + 1)
    }

    for (const ransomChar of ransomNote) {
        const remaining = magCharMap.get(ransomChar) ?? 0

        // Character is missing or all copies have been used
        if (remaining === 0) {
            return false
        }

        magCharMap.set(ransomChar, remaining - 1)
    }

    return true
};
