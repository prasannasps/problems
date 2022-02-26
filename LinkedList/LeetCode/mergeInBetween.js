/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {

    const newNode = list1;
    let currNode = newNode;
    while (a > 1) {
        currNode = currNode.next;
        a--;
        b--;
    }

    let list1Backup = currNode.next;
    currNode.next = list2;

    while (currNode.next) {
        currNode = currNode.next;
    }

    while (b >= 1) {
        list1Backup = list1Backup.next;
        b--;
    }

    currNode.next = list1Backup;
    return newNode;

};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const printLL = (node) => {

    while (node) {
        console.log(node.value + " ");
        node = node.next;
    }

}


let node1 = { value: 0, next: { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: { value: 6, next: { value: 7, next: undefined } } } } } } } };
let node2 = { value: 1000, next: { value: 10001, next: { value: 10003, next: { value: 10005, next: { value: 10005, next: undefined } } } } };
console.log(mergeInBetween(node1, 3, 4, node2))