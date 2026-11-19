function numberOfSteps(num: number): number {

    let steps = 0

    // begin recursive function
    function numberToZero(n) {
        if (n === 0) {
            n = n - 1
            // steps++
            return steps
            } else if (n === 2) {
            n = 1
            steps++
        } else if (n % 2 === 0) {
            n = n / 2
            steps++
            // return steps
        } else if (n % 2 === 1) {
            n = n - 1
            steps++
            // return steps
        }

        return numberToZero(n)
    }

    return numberToZero(num)
    // return steps
}
