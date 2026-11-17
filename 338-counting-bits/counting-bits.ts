function countBits(n: number): number[] {
    const ans: number[] = [0];

    for (let i = 1; i <= n; i++) {
        const smaller = i >> 1; // Remove the last binary digit
        const lastBit = i & 1;  // Check whether that digit was 0 or 1

        ans[i] = ans[smaller] + lastBit;
    }

    return ans;
}