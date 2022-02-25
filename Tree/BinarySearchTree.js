class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    getRoot() {
        return this.root;
    }

    insert(value) {

        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        let tempRoot = this.root;
        while (tempRoot) {
            if (value > tempRoot.value) {
                if (!tempRoot.right) {
                    tempRoot.right = new Node(value);
                    return;
                }
                tempRoot = tempRoot.right;
            }
            else {
                if (!tempRoot.left) {
                    tempRoot.left = new Node(value);
                    return;
                }
                tempRoot = tempRoot.left;
            }
        }

    }

    print() {
        console.log(this.root);
    }

    lookup(value) {
        let rootCopy = this.root;
        let prev = rootCopy;
        let dir = null;
        while (rootCopy) {
            if (rootCopy.value === value) {
                return { prev, rootCopy, dir };
            }
            prev = rootCopy;
            if (value > rootCopy.value) {
                rootCopy = rootCopy.right;
                dir = 'r';
            }
            else {
                rootCopy = rootCopy.left;
                dir = 'l';
            }
        }
        return null;
    }


    //     remove(value) {
    //         let { root = prev, rootCopy, dir } = this.lookup(value);
    //         if (!root) {
    //             return null;
    //         }
    //         if (!root.right) {

    //             if (!dir) {
    //                 root = root.left;
    //                 return;
    //             }

    //             if (dir === 'r') {
    //                 root.right =
    // }

    //         }



    //         let current = root.right;
    //         let prev = root;
    //         while (current) {
    //             if (!current.left) {
    //                 root.value = current.value;
    //                 prev.left = null;
    //                 return;
    //             }
    //             prev = current;
    //             current = current.left;
    //         }
    //     }
}



const tree = new BST();

// tree.insert(5);
// tree.insert(4);
// tree.insert(3);
// tree.insert(2);
// tree.insert(2);

tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(2);
tree.insert(4);
tree.insert(null);
tree.insert(7);
// tree.insert(3);
// tree.insert(2);
// tree.insert(2);
// console.log(tree.traverse(tree.getRoot(), 7));


// console.log(tree._traverse(tree.getRoot()));


// tree.remove(3);

// tree.insert(30);
// tree.insert(35);
// console.log(tree.lookup(28));
// console.log(tree.lookup(287))
// tree.print();