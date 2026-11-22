function findRelativeRanks(score: number[]): string[] {
    const topThreeNames = new Map<number, string>([
        [0, 'Gold Medal'],
        [1, 'Silver Medal'],
        [2, 'Bronze Medal'],
    ])

    const athletes = score.map((value, index) => ({
        value,
        index,
    }))

    athletes.sort((a, b) => b.value - a.value)

    const ranks: string[] = new Array(score.length)

    for (let i = 0; i < athletes.length; i++) {
        const originalIndex = athletes[i].index

        ranks[originalIndex] = topThreeNames.get(i) ?? String(i + 1)
    }

    return ranks
}