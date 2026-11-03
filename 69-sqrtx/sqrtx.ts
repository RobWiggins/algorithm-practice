function mySqrt(x: number): number {
    let lower = 0
    let higher = x

    while (lower <= higher) {

        let mid = Math.floor((lower + higher) / 2)
        let guess = mid * mid
  
        if (guess === x) {
            return mid
        }

        if (guess > x) {
            higher = mid - 1
        } else {
            lower = mid + 1
        }

    }

    return higher
};  