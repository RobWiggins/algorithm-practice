function climbStairs(n: number): number {
    
    if (n <= 2) {
        return n;
    }
    
    // Key is don't need to generate every possible step combination. Just
    // count how many ways there are using the previous two counts.

    let twoBefore = 1; // ways to climb 1 step
    let oneBefore = 2; // ways to climb 2 steps
    
    for (let i = 3; i <= n; i++) {
        const current = oneBefore + twoBefore;
        twoBefore = oneBefore;
        oneBefore = current;
    }
    
    return oneBefore;
}
