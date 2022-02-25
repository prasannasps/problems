const islandCount = () => {

    const grid = getGrid();
    const visited = new Set();
    let numberOfIslands = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[r][j] === 'L' && exploreIsland(grid, r, j, visited)) {
                numberOfIslands++;
            }
        }
    }

    return numberOfIslands;

};

const getGrid = () => {
    return [
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
    ];
}


const exploreIsland = (grid, r, j, visited) => {

    if (r < 0 || r >= grid.length || j < 0 || j >= grid.length) return false;
    const el = grid[r][j];
    if (visited.has(r + "::" + j) || el === 'W') return false;
    visited.add(r + "::" + j);

    exploreIsland(grid, r - 1, j, visited);
    exploreIsland(grid, r, j - 1, visited);
    exploreIsland(grid, r, j + 1, visited);
    exploreIsland(grid, r + 1, j, visited);

    return true;

}


console.log(islandCount());


























module.exports = {
    islandCount
};