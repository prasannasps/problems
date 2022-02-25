const minimumIslandCount = () => {

    const grid = getGrid();
    const visited = new Set();
    let minimumIsland = Infinity;
    for (let r = 0; r < grid.length; r++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[r][j] === 'L' && !(visited.has(r + "::" + j))) {
                minimumIsland = Math.min(exploreIsland(grid, r, j, visited), minimumIsland);
            }
        }
    }

    return minimumIsland;

};

const getGrid = () => {
    return [
        ['W', 'W'],
        ['L', 'L'],
        ['W', 'W'],
        ['W', 'L']
    ];
}


const exploreIsland = (grid, r, j, visited, count = 0) => {

    if (r < 0 || r >= grid.length || j < 0 || j >= grid[0].length) return 0;
    const el = grid[r][j];
    if (visited.has(r + "::" + j) || el === 'W') return 0;
    visited.add(r + "::" + j);
    count++;

    count += exploreIsland(grid, r - 1, j, visited) + exploreIsland(grid, r, j - 1, visited) +
        exploreIsland(grid, r, j + 1, visited) + exploreIsland(grid, r + 1, j, visited);

    return count;

}


console.log(minimumIslandCount());


























module.exports = {
    minimumIslandCount
};