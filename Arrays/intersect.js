/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

    const numsMap = {};
    const resultArray = [];

    nums1.map(num => {
        if (num in numsMap) numsMap[num]++;
        else numsMap[num] = 1;
    });

    nums2.map(num => {
        if (num in numsMap && numsMap[num] > 0) {
            resultArray.push(num);
            numsMap[num]--;
        }
    });

    return resultArray;

};


console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))