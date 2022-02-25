/**
 * @param {string[]} equations
 * @return {boolean}
 * https://leetcode.com/problems/satisfiability-of-equality-equations/submissions/
 */
var equationsPossible = function (equations) {

    const { graph, unequalEqns } = buildGraph(equations);

    for (let i = 0; i < unequalEqns.length; i++) {
        const [src, dest] = unequalEqns[i];
        if (src === dest || bfs(graph, src, dest)) return false;
    }
    return true;

};



const bfs = (graph, start, end, visited = {}) => {

    if (!(start in graph && end in graph)) return false;
    if (start === end) return true;
    visited[start] = true;

    for (let neighbour of graph[start]) {
        if (visited[neighbour]) continue;
        if (bfs(graph, neighbour, end, visited)) {
            return true;
        }
    }

    return false;

}


/**
 * @param {string[]} equations
 * @return {boolean}
 */
const buildGraph = (equations) => {

    const graph = {};
    const unequalEqns = [];

    equations.forEach(equation => {

        const a = equation.charAt(0);
        const b = equation.charAt(3);

        if (equation.includes('==')) {

            if (!graph[a]) graph[a] = [];
            if (!graph[b]) graph[b] = [];

            graph[a].push(b);
            graph[b].push(a);
        } else {
            unequalEqns.push([a, b])
        }

    });

    return { graph, unequalEqns };

}

console.log(equationsPossible(["a==b", "b!=a"]));

console.log(equationsPossible(["b==a", "a==b"]));

console.log(equationsPossible(["a==b", "b!=c", "c==a"]));




console.log(equationsPossible(["c==c", "b==d", "x!=z"]));

console.log(equationsPossible(["a!=a"]));

