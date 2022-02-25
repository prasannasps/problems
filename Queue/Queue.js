class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}



class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        console.log(this.first);
    }

    enqueue(value) {

        const newNode = new Node(value);
        if (!this.length) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        console.log(this);
    }

    deque() {
        // const newNode = new Node(firstTemp.next);
        const firstTemp = JSON.parse(JSON.stringify(this.first));
        this.first = firstTemp.next;
        this.length--;
        console.log(this);
    }

    print() {
        let firstTemp = this.first;
        const arr = [];
        while (firstTemp.next) {
            arr.push(firstTemp.value);
            firstTemp = firstTemp.next;
        }
        arr.push(firstTemp.value);

        console.log(arr);
    }
}


const myStack = new Stack();
myStack.enqueue(1);
myStack.enqueue(2);
myStack.enqueue(3);
myStack.enqueue(4);
myStack.enqueue(5);

myStack.deque();
myStack.print();
myStack.peek();