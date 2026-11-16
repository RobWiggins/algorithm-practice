function fib(n: number): number {
    function calculate(num): number {
        if (num <= 1) {
            return num
        }

        return calculate(num - 1) + calculate(num - 2)
    }

    return calculate(n)
};
