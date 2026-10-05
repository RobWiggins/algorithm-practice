function lengthOfLastWord(s: string): number {
    const strArr = s.trim().split(/\s+/)
    return strArr[strArr.length - 1].length
};