/**
 * @param {number} n
 * @return {number[]}
 * https://leetcode.com/problems/counting-bits/
 */
var countBits = function (n) {

    if (n === 0) {
        return [0];
    }
    else if (n === 1) {
        return [0, 1];
    }
    else {
        const res = [0, 1];
        let toSlice = 1;
        while (true) {
            const slicedList = res.slice(+toSlice);
            for (let i = 0; i <= 1; i++) {
                res.push(...(slicedList.map(num => num + i)));
            }
            toSlice += toSlice;
            if (res.length > n) break;
        }
        return res.slice(0, n + 1);
    }

};

console.log(countBits(5));
console.log(countBits(100));