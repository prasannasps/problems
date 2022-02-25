


class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}


class LinkedList {
    constructor(value) {

        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {

        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }

        const newNode = new Node(value, null, temp);
        temp.next = newNode;
        this.length++;
    }

    unshift(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    inserAtPos(pos, value) {
        let counter = 0;
        let temp = this.head;
        while (pos - 1 > counter) {
            // console.log(temp)
            temp = temp.next;
            counter++;
        }
        // console.log(temp)

        const newNode = new Node(value, temp.next, temp);
        temp.next.prev = newNode;
        temp.next = newNode;

        this.length++;

    }


    deleteAtPos(pos) {
        let tempPos = 0;
        let temp = this.head;
        while (pos > tempPos++) {
            console.log(temp)
            temp = temp.next;
        }
        console.log(temp)

        temp.next.prev = temp.prev;
        temp.prev.next = temp.next;
        this.length--;
    }

    print() {
        let temp = this.head;
        const aray = [];
        while (temp.next != null) {
            // console.log(temp);
            // aray.push(temp.prev?.value + '--' + temp.value + '--' + temp.next?.value)
            aray.push(temp.value);
            temp = temp.next;
        }

        // console.log(temp);
        aray.push(temp.value)
        console.log(aray)
    }
}

const myLL = new LinkedList(1);
myLL.push(2);
myLL.push(3);
myLL.push(4);
myLL.push(6);
myLL.push(7);
myLL.unshift(0);
myLL.inserAtPos(2, 88);
myLL.deleteAtPos(3);
myLL.print();

