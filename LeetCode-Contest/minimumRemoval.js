/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function (beans) {

    let ops = 0;
    beans = beans.sort((a, b) => a - b);
    if (beans.length === 0) return ops;

    let start = 0, end = beans.length - 1;

    while (start < end) {

        if (beans[start] < beans[end] - beans[start]) {
            ops += beans[start++];
        } else {
            ops += beans[end--] - beans[start];
        }

    }

    return ops;

};

console.log(minimumRemoval([4, 1, 6, 5]));

console.log(minimumRemoval([2, 10, 3, 2]));
