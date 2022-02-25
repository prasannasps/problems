/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 * https://leetcode.com/problems/clone-graph/submissions/
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {

    const visited = {};
    return bfs(node, new Node(), visited);

};


const bfs = (node, root, visisted) => {

    if (!node) return node;
    if (node.val in visisted) return visisted[node.val];

    root.val = node.val;

    visisted[node.val] = root;

    for (let neighbour of node.neighbors) {
        let newNeighbour = new Node();
        root.neighbors.push(bfs(neighbour, newNeighbour, visisted));
    }

    return root;

}


console.log(cloneGraph())