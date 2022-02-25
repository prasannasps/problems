/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/sort-integers-by-the-power-value/
 */
var getKth = function (lo, hi, k) {

    const memo = {};
    const powerArray = [];
    const numberList = []

    for (let i = lo; i <= hi; i++) {
        numberList.push(i);
        powerArray.push(power(i, memo));
    }

    bubbleSort(powerArray, numberList);
    return numberList[k - 1];

};

const bubbleSort = (toSort, ref) => {

    for (let i = 0; i < toSort.length; i++) {
        // const iEl = toSort[i];
        for (let j = i + 1; j < toSort.length; j++) {
            // const jEl = toSort[j];
            if (toSort[i] > toSort[j] || (toSort[i] === toSort[j] && (ref[i] > ref[j]))) {
                let temp = toSort[i];
                toSort[i] = toSort[j];
                toSort[j] = temp;
                temp = ref[i];
                ref[i] = ref[j];
                ref[j] = temp;
            }
        }

    }

}



const power = (n, memo) => {

    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    if (n % 2 === 0) return 1 + power(n / 2, memo);
    else return 1 + power(3 * n + 1, memo);

}


console.log(getKth(12, 15, 2));
console.log(getKth(7, 11, 4));
console.log(getKth(1, 1000, 777));