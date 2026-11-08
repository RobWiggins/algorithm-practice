function generate(numRows: number): number[][] {
    const arr: number[][] = [[]]

    let rowIdx = 0

    if (numRows === 0) {
        return []
    } else if (numRows === 1) {
        return [[1]]
    } else {

        const arr = generate(numRows - 1)
        const previousRow = arr[arr.length - 1]
        const newRow = [1]

        for (let i = 1; i < previousRow.length; i++) {
            newRow.push(previousRow[i - 1] + previousRow[i])
        }

        newRow.push(1)
 
       arr.push(newRow)

       return arr
    }

    // return arr
};
