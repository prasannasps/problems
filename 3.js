function largeGroupPositions() {
    s = 'sdaaa';

    const len = s.length;
    let wordCount = 1;

    const newArr = [];

    for (let index = 1; index < len; index++) {
        // const element = array[index];
        if (s[index] === s[index - 1]) {
            wordCount++;
            if (wordCount >= 3 && index === len - 1) {
                newArr.push([index - wordCount + 1, index]);
            }
            continue;
        }
        else {
            if (wordCount >= 3) {
                newArr.push([index - wordCount, index - 1]);
            }
            wordCount = 1;
        }
    }

    console.log(newArr);

};

// largeGroupPositions();



/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {

    function add(accumulator, a) {
        return accumulator + a;
    }

    if (start > destination) {
        let temp = start;
        start = destination;
        destination = temp;
    }

    const clockwiseSum = distance.splice(start, destination - start).reduce(add, 0);
    const counterclockwiseSum = distance.reduce(add, 0);

    console.log(clockwiseSum + " " + counterclockwiseSum);

    return clockwiseSum > counterclockwiseSum ? counterclockwiseSum : clockwiseSum;


};

distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2)