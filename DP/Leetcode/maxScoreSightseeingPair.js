/**
 * @param {number[]} values
 * @return {number}
 * https://leetcode.com/problems/best-sightseeing-pair/
 */
var maxScoreSightseeingPair = function (values) {

    let res = curr = 0;

    values.map(val => {
        res = Math.max(res, curr + val);
        curr = Math.max(curr, val) - 1;
    });

    return res;

};


console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));

console.log(maxScoreSightseeingPair([1, 2]));

console.log(maxScoreSightseeingPair([1, 3, 5]));

