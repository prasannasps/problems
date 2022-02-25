class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {

        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = {
            value: value,
            next: null
        }

        this.tail = temp.next;
        this.length++;
    }

    unshift(value) {
        this.head.next = JSON.parse(JSON.stringify(this.head));
        this.head.value = value;
        this.length++;
    }

    inserAtPos(pos, value) {
        let tempPos = 0;
        let temp = this.head;
        while (pos > tempPos) {
            temp = temp.next;
            tempPos++;
            // console.log(temp)
        }
        // console.log(temp)

        temp.next = JSON.parse(JSON.stringify(temp));
        temp.value = value;
        this.length++;

    }


    deleteAtPos(pos) {
        let tempPos = 0;
        let temp = this.head;
        while (pos - 1 > tempPos) {
            temp = temp.next;
            tempPos++;
        }
        temp.next = temp.next.next;
        this.length--;
    }

    reverse() {
        let first = this.head;
        let second = first.next;

        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
    }

    print() {
        let temp = this.head;
        const arr = [];
        while (temp.next != null) {
            // console.log(temp.value + ' , ');
            arr.push(temp.value);
            temp = temp.next;
        }

        arr.push(temp.value);
        console.log(arr);
    }
}

const myLL = new LinkedList(1);
myLL.push(2);
myLL.push(3);
myLL.push(4);
myLL.push(6);
myLL.push(7);
myLL.unshift(0);
myLL.inserAtPos(5, 5);
myLL.deleteAtPos(5);
myLL.print();
myLL.reverse();
myLL.print();



// console.log(myLL);


class Node {
    value;
    next;
}