const MergeSort = (array) => {

    if (array.length === 1) {
        return array;
    }

    const len = array.length;
    const left = array.splice(0, len / 2);
    const right = array;

    return (merge(
        MergeSort(left),
        MergeSort(right)
    ));

}


const merge = (left, right) => {

    const sortedArray = [];

    while (left.length > 0 || right.length > 0) {

        const leftLen = left.length;
        const rightLen = right.length;

        if (leftLen === 0) {
            sortedArray.push(right.splice(0, 1)[0]);
            continue;
        }

        if (rightLen === 0) {
            sortedArray.push(left.splice(0, 1)[0]);
            continue;
        }

        if (left[0] < right[0]) {
            sortedArray.push(left.splice(0, 1)[0]);
        }
        else {
            sortedArray.push(right.splice(0, 1)[0]);
        }

    }

    return sortedArray;

}


console.log(MergeSort([1, 3, 2, 5, 4, 56, 0]));