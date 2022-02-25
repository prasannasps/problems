const graph = {
    a: ['b', 'c', 'e'],
    b: ['d'],
    c: ['d', 'e', 'f'],
    d: ['g'],
    e: [],
    f: [],
    g: ['f']
}



const dfs = (graph, src, dest) => {

    if (src === dest) return true;

    for (let neighbour of graph[src]) {
        if (bfs(graph, neighbour, dest)) return true;
    }
    return false;

}


const bfs = (graph, src, dest) => {

    const queue = [src];

    while (queue.length > 0) {

        const current = queue.shift();
        if (current === dest) return true;

        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }

    }

    return false;

}

console.log(bfs(graph, 'a', 'f'));
console.log(bfs(graph, 'f', 'a'));


console.log(dfs(graph, 'a', 'f'));
console.log(dfs(graph, 'f', 'a'));