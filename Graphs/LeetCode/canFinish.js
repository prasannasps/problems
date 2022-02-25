/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * https://leetcode.com/problems/course-schedule/discuss/146325/JavaScript-DFS
 */
var canFinish = function (numCourses, prerequisites) {

    const graph = buildGraph(numCourses, prerequisites);
    const seen = new Set();

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(graph, i, seen)) {
            return false;
        }
    }
    return true;

};

const dfs = (graph, current, seen, seeing = new Set()) => {

    if (seen.has(current)) return true;
    if (seeing.has(current)) return false;
    seeing.add(current);

    for (let neighbour of graph[current]) {
        if (!dfs(graph, neighbour, seen, seeing)) {
            return false;
        }
    }

    seeing.delete(current);
    seen.add(current);

    return true;

}


/**
 * @param {number} numCourses
 * @param {number[][]} edges
 * @return {any}
 */
const buildGraph = (numCourses, edges) => {

    const graph = {};

    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }

    edges.forEach(edge => {
        const [a, b] = edge;
        graph[b].push(a);
    });

    return graph;

}

console.log(canFinish(2, [[1, 0], [0, 1]]));
console.log(canFinish(2, [[0, 1]]));
console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(1, []));