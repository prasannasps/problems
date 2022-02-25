

const breadthFirstSearch = (graph, source) => {
    // if(stack.length===0)
    // const stack = [source];
    // const current = stack.pop();
    console.log(source);

    for (let neighbour of graph[source]) {
        breadthFirstSearch(graph, neighbour);
    }

}


const breadthFirstSearchIterative = (graph, source) => {
    // if(stack.length===0)
    const queue = [source];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);

        for (let neighbour of graph[current]) {
            queue.push(neighbour);
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

console.log(breadthFirstSearch(graph, 'a'));
console.log(breadthFirstSearchIterative(graph, 'a'));