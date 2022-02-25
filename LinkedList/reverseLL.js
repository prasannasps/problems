
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * 
 * @param {ListNode} head 
 * https://leetcode.com/problems/reverse-linked-list/submissions/
 */
const reverse = (head) => {

    let newHead = null;
    // let curr = head;

    while (head) {
        let next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }

    return newHead;

}


console.log(reverse({ val: 1, next: { val: 2, next: { val: 3, next: undefined } } }));