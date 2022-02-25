const BubbleSort = (array) => {

    const length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log(array);
}


BubbleSort([1, 3, 5, 4, 2]);