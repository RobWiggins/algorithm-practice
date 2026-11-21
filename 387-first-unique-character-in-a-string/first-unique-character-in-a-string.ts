function firstUniqChar(s: string): number {
    // put chars into map that stores char frequency
    const charFrequency = new Map<string, number>()
    for (let char of s) {
        charFrequency.set(char, charFrequency.get(char) + 1 || 1)
    }

    // Search for first immediate unique character 
    for (let i = 0; i < s.length; i++) {
        if (charFrequency.get(s[i]) === 1) {
            return i   
        }
    }

    // no unique character
    return -1
};