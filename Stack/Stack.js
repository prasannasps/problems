class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}



class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        console.log(this.top);
    }

    push(value) {
        if (!this.length) {
            const newNode = new Node(value);
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            const topTemp = this.top;
            const newNode = new Node(value);
            newNode.next = topTemp;
            this.top = newNode;
        }
        this.length++;
        console.log(this);
    }

    pop() {
        this.top = this.top.next;
        this.length--;
        console.log(this);
    }

    print() {
        let topTemp = this.top;
        const arr = [];
        while (topTemp.next) {
            arr.push(topTemp.value);
            topTemp = topTemp.next;
        }
        arr.push(topTemp.value);

        console.log(arr);
    }
}


const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.pop();
myStack.print();
myStack.peek();