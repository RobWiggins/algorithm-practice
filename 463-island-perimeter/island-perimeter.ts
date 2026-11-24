function islandPerimeter(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    function bfs(startRow: number, startCol: number): number {
        const queue: [number, number][] = [[startRow, startCol]];
        const visited = new Set<string>([`${startRow},${startCol}`]);

        let head = 0;
        let perimeter = 0;

        while (head < queue.length) {
            const [row, col] = queue[head];
            head++;

            for (const [dr, dc] of directions) {
                const nextRow = row + dr;
                const nextCol = col + dc;

                // This side faces water or the edge of the grid.
                if (
                    nextRow < 0 ||
                    nextRow >= rows ||
                    nextCol < 0 ||
                    nextCol >= cols ||
                    grid[nextRow][nextCol] === 0
                ) {
                    perimeter++;
                    continue;
                }

                // This neighbor is land. Visit it if we haven't already.
                const key = `${nextRow},${nextCol}`;

                if (!visited.has(key)) {
                    visited.add(key);
                    queue.push([nextRow, nextCol]);
                }
            }
        }

        return perimeter;
    }

    // Find the first land cell, then explore the entire island.
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                return bfs(row, col);
            }
        }
    }

    return 0;
}