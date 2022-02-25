

const graphMap = () => {

    // const graph = {
    //     0: [8, 1, 5],
    //     1: [0],
    //     5: [0, 8],
    //     8: [0, 5],
    //     2: [3, 4],
    //     3: [2, 4],
    //     4: [3, 2]
    // }

    const graph = {
        1: [2],
        2: [1, 8],
        6: [7],
        9: [8],
        7: [6, 8],
        8: [9, 7, 2]
    }

    return graph;

}

const connectedComponents = () => {

    const graph = graphMap();
    let numberOfConnectedComponents = 0;

    const visited = new Set();

    for (const node in graph) {

        //BreadthFirstQueue
        const queue = [+node];
        if (visited.has(+node)) continue;

        while (queue.length > 0) {
            const current = queue.shift();
            if (visited.has(current)) continue;
            visited.add(current);

            for (let neighbour of graph[current]) {
                queue.push(neighbour);
            }
        }

        numberOfConnectedComponents++;

    }

    return numberOfConnectedComponents;

}

console.log(connectedComponents());




//Alvin's method - Recursion

const connectedComps = () => {

    const graph = graphMap();
    const visited = new Set();
    let countOfConnectedComponents = 0;

    for (const key in graph) {
        if (explorePath(key, graph, visited)) {
            countOfConnectedComponents++;
        }
    }

    return countOfConnectedComponents;

}



const explorePath = (node, graph, visited) => {

    if (visited.has(+node)) return false;
    visited.add(+node);

    for (const neighbour of graph[node]) {
        explorePath(neighbour, graph, visited);
    }

    return true;

}


console.log(connectedComps());