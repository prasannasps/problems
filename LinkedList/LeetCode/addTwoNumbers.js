/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//https://leetcode.com/problems/add-two-numbers/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var saddTwoNumbers = function (l1, l2) {

    let totalSum = 0;
    let power = 1;
    let nextSum = 0;

    while (true) {

        let sum = l1.val + l2.val;
        let mod = 0;

        if (sum < 10) {
            mod = sum + nextSum;
            nextSum = 0;
        } else {
            mod = (sum % 10) + nextSum;
            nextSum = Math.floor(sum / 10);
        }

        totalSum += mod * power;
        power *= 10;
        sum = Math.floor(sum / 10);

        if (!l1.next && !l2.next) {

            totalSum += power * nextSum;
            break;

        }

        l1 = l1.next || new ListNode();
        l2 = l2.next || new ListNode();

    }

    const sumNode = new ListNode();
    let currNode = sumNode;
    while (totalSum >= 10) {

        currNode.val = totalSum % 10;
        totalSum = Math.floor(totalSum / 10);
        currNode.next = new ListNode();
        currNode = currNode.next;

    }

    currNode.val = totalSum;
    return sumNode;

};


// let a = { val: 9, next: { val: 9, next: { val: 9, next: undefined } } };
// let b = { val: 9, next: { val: 9, next: undefined } };

// let a = { val: 2, next: { val: 4, next: { val: 3, next: undefined } } };
// let b = { val: 5, next: { val: 6, next: { val: 4, next: undefined } } };

let a = {
    val: 1, next: {
        val: 0, next: {
            val: 0, next: {
                val: 0, next: {
                    val: 0, next: {
                        val: 0, next: {
                            val: 0, next: {
                                val: 0, next: {
                                    val: 0,
                                    next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: undefined } } } } } } } } } } } } } } } }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
let b = { val: 5, next: { val: 6, next: { val: 4, next: undefined } } };

console.log(saddTwoNumbers(a, b));