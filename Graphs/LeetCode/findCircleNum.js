/**
 * @param {number[][]} isConnected
 * @return {number}
 * https://leetcode.com/problems/number-of-provinces/submissions/
 */
var findCircleNum = function (isConnected) {

    const graph = buildGrpah(isConnected);
    const visited = new Set();
    let count = 0;

    for (let i = 0; i < isConnected.length; i++) {

        if (dfs(graph, i, visited)) count++;

    }

    return count;

    // return (buildGrpah(isConnected));

};



const dfs = (graph, node, visited) => {

    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbour of graph[node]) {
        dfs(graph, neighbour, visited);
    }

    return true;

}



/**
 * 
 * @param {number[][]} isConnected 
 * @return {any}
 */
const buildGrpah = (isConnected) => {

    const graph = {};

    isConnected.forEach((rowList, rowInd) => {

        graph[rowInd] = [];
        rowList.forEach((el, colInd) => {

            if (rowInd !== colInd && el) {
                graph[rowInd].push(colInd);
            }

        });

    });

    return graph;

}


console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]))

console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
