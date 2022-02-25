const InsertionSort = (array) => {

    const len = array.length;

    for (let i = 1; i < len; i++) {

        for (let j = 0; j < i; j++) {

            if (array[i] < array[j]) {
                reverseSwap(array, j, i);
                break;
            }

        }

    }

    console.log(array)

}

reverseSwap = (array, start, end) => {

    while (end > start) {
        let temp = array[end - 1];
        array[end - 1] = array[end];
        array[end--] = temp;
    }

    // console.log(array)

}


InsertionSort([1, 5, 2, 4, 3])
InsertionSort([4, 6, 3, 65, 3, 5, 3, 9, 4, 1])