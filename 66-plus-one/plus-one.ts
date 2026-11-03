function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i] = digits[i] + 1
            return digits
        }
    }

    // Every digit was 9, so add a leading 1.
    digits.unshift(1)
    return digits
}