/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 * Not Working
 */
var minimumJumps = function (forbidden, a, b, x) {

    const res = minJumps(forbidden, a, b, x, x);
    return res != Infinity ? res - 1 : -1;

};

const minJumps = (forbidden, a, b, x, target, prevJump = null) => {

    if (x === 0) return 1;
    if (prevJump && (x - a < 0 && x + b > target) || forbidden.includes(x)) return Infinity;
    if (prevJump === 'back')
        return 1 + minJumps(forbidden, a, b, x - a, target, 'front');
    else
        return Math.min(1 + minJumps(forbidden, a, b, x - a, target, 'front'), 1 + minJumps(forbidden, a, b, x + b, target, 'back'));

}

// console.log(minimumJumps([14, 4, 18, 1, 15], 3, 15, 9))

// console.log(minimumJumps([8, 3, 16, 6, 12, 20], 15, 13, 11))
console.log(minimumJumps([1, 6, 2, 14, 5, 17, 4], 16, 9, 7))
