const shortestPath = (nodeA, nodeB) => {
    const graph = buildGraph();

    const newObj = {};  //can use subarray instead of subobjects
    newObj[nodeA] = 0;
    const queue = [newObj];

    const visited = new Set();

    while (queue.length > 0) {

        const node = queue.shift();
        const currentVal = Object.keys(node)[0];
        if (currentVal === nodeB) return node[currentVal];
        if (visited.has(currentVal)) continue;
        visited.add(currentVal);

        for (let neighbour of graph[currentVal]) {
            const nodeObj = {};
            nodeObj[neighbour] = node[currentVal] + 1;
            queue.push(nodeObj);
        }

    }

    return 0;

};


const buildGraph = () => {
    const edges = [
        ['a', 'c'],
        ['a', 'b'],
        ['c', 'b'],
        ['c', 'd'],
        ['b', 'd'],
        ['e', 'd'],
        ['g', 'f']
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



console.log(shortestPath('a', 'e'));


















module.exports = {
    shortestPath
};