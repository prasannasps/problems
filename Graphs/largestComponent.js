//https://structy.net/problems/largest-component

const graphMap = () => {

    const graph = {
        0: ['8', '1', '5'],
        1: ['0'],
        5: ['0', '8'],
        8: ['0', '5'],
        2: ['3', '4'],
        3: ['2', '4'],
        4: ['3', '2']
    }

    // const graph = {
    //     1: [2],
    //     2: [1, 8],
    //     6: [7],
    //     9: [8],
    //     7: [6, 8],
    //     8: [9, 7, 2]
    // }

    return graph;

}

const largestComponentIterative = () => {

    const graph = graphMap();
    const visited = new Set();
    let max = 0;

    for (const node in graph) {

        //BreadthFirstQueue
        const queue = [node];
        let count = 0;

        while (queue.length > 0) {
            const current = queue.shift();
            if (visited.has(current)) continue;
            visited.add(current);
            count++;

            for (let neighbour of graph[current]) {
                queue.push(neighbour);
            }
        }

        max = Math.max(max, count);

    }

    return max;

}

console.log(largestComponentIterative());




//Alvin's method - Recursion

const largestComponent = () => {

    const graph = graphMap();
    const visited = new Set();
    let max = 0;

    for (const key in graph) {
        max = Math.max(max, explorePath(key, graph, visited))
    }

    return max;

}



const exploreSize = (node, graph, visited, count = 0) => {

    if (visited.has(+node)) return count;
    visited.add(+node);
    count++;

    for (const neighbour of graph[node]) {
        count += explorePath(neighbour, graph, visited);
    }

    return count;

}


console.log(largestComponent());