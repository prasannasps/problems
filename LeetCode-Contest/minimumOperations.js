/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {

    let len = nums.length;

    if (len <= 1) return 0;

    const first = {
        0: 1
    };
    const second = {
        0: 1
    };

    let currFirstMax = 0, currSecondMax = 0;

    nums.forEach((num, ind) => {

        if (ind % 2) {
            !(num in second) ? second[num] = 1 : second[num]++;
            const cond = num in first ? second[num] <= first[num] : true;
            if (second[num] > second[currSecondMax] && cond) currSecondMax = num;
        } else {
            !(num in first) ? first[num] = 1 : first[num]++;
            const cond = num in second ? first[num] <= second[num] : true;
            if (first[num] > first[currFirstMax] && cond) currFirstMax = num;
        }

    });

    // console.log(first, second)


    if (len % 2) {
        return ((len + 1) / 2 - first[currFirstMax]) + ((len - 1) / 2 - second[currSecondMax]);
    }
    return (len / 2 - first[currFirstMax]) + (len / 2 - second[currSecondMax]);


};


// console.log(minimumOperations([3, 1, 3, 2, 4, 3]));
// console.log(minimumOperations([1, 2, 2, 2, 2]));

console.log(minimumOperations([4, 1, 6, 5]));
console.log(minimumOperations([2, 10, 3, 2]));





