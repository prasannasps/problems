/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/contest/weekly-contest-277/problems/find-all-lonely-numbers-in-the-array/
 */
var findLonely = function (nums) {

    const map = {};
    let resultNums = [];

    nums.map(num => {
        if (map[num]) { map[num]++; }
        else { map[num] = 1; }
    })

    nums.map(num => {
        if (map[num] === 1 && !map[num - 1] && !map[num + 1]) resultNums.push(num);
    })

    return resultNums;

};


console.log(findLonely([10, 6, 5, 8]));

console.log(findLonely([1, 3, 5, 3]));
