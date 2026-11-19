function fizzBuzz(n: number): string[] {

    let idx = 1
    let fizzArr = []

    while (idx <= n) {
        if (bothDivisible(idx)) {
            fizzArr.push('FizzBuzz')
        } else if (fiveDivisible(idx)) {
            fizzArr.push('Buzz')
        } else if (threeDivisible(idx)) {
            fizzArr.push('Fizz')
        } else {
            fizzArr.push('' + idx)
        }

        idx++
    }

    return fizzArr
};


function bothDivisible(num: number): boolean {
    return ((num % 3) === 0) && ((num % 5) === 0)
}

function fiveDivisible(num: number): boolean {
    return ((num % 5) === 0)
}

function threeDivisible(num: number): boolean {
    return ((num % 3) === 0)
}
