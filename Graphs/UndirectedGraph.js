const undirectedgraph = (src, dest) => {

    const graph = buildGraph();

    const stack = [src];
    const visited = {};  //use Set instead of object

    while (stack.length > 0) {
        const current = stack.pop();
        if (current in visited) continue;
        visited[current] = true;
        if (current === dest) return true;
        for (let neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }

    return false;
}


const buildGraph = () => {
    const edges = [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n']
    ];

    const graph = {};

    for (const edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;

}

console.log(undirectedgraph('i', 'l'));
console.log(undirectedgraph('i', 'o'));