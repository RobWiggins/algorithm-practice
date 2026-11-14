function addDigits(num: number): number {
    
    function getDigits(num: number): number[] {
        return Array.from(num.toString(), Number)
    }

    while (num >= 10) {
        let digits = getDigits(num)

        num = digits.reduce((sum, num) => sum + num, 0)

        if (num < 10) return num 
    }

    if (num < 10) return num
};