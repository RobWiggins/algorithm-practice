function maximumWealth(accounts: number[][]): number {

    const maxWealth = accounts.reduce((max, row) => {
        const rowSum = row.reduce((sum, num) => sum + num, 0);

        return Math.max(max, rowSum)

    }, 0);

    return Math.max(maxWealth)

}