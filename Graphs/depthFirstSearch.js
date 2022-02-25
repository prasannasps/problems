


const depthFirstSearch = (graph, source) => {
    console.log(source);
    for (neighbour of graph[source]) {
        depthFirstSearch(graph, neighbour);
    }
}


const depthFirstSearchIterative = (graph, source) => {
    const stack = [source];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for (neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }

}


const graph = {
    a: ['b', 'c', 'e'],
    b: ['d'],
    c: ['d', 'e', 'f'],
    d: ['g'],
    e: [],
    f: [],
    g: ['f']
}

// console.log(depthFirstSearch(graph, 'a'));
console.log(depthFirstSearchIterative(graph, 'a'));