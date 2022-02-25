/**
 * @param {character[][]} grid
 * @return {number}
 * https://leetcode.com/problems/number-of-islands/
 */
var numIslands = function (grid) {

    const visited = new Set();
    let numberOfIslands = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[r][j] === '1' && exploreIsland(grid, r, j, visited)) {
                numberOfIslands++;
            }
        }
    }

    return numberOfIslands;

};


const getGrid = () => {
    return [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ]
}


const exploreIsland = (grid, r, j, visited) => {

    if (r < 0 || r >= grid.length || j < 0 || j >= grid[0].length) return false;
    const el = grid[r][j];
    if (visited.has(r + "::" + j) || el === '0') return false;
    visited.add(r + "::" + j);

    exploreIsland(grid, r - 1, j, visited);
    exploreIsland(grid, r, j - 1, visited);
    exploreIsland(grid, r, j + 1, visited);
    exploreIsland(grid, r + 1, j, visited);

    return true;

}

console.log(numIslands(getGrid()))