function numberOfSteps(num: number): number {

    let steps = 0

    function numberToZero(n) {
        if (n === 0) {
            return steps
            } else if (n === 2) {
            n = 1
            steps++
        } else if (n % 2 === 0) {
            n = n / 2
            steps++
        } else if (n % 2 === 1) {
            n = n - 1
            steps++
        }

        return numberToZero(n)
    }

    return numberToZero(num)
}
