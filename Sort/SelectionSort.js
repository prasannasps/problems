const SelectionSort = (array) => {

    const length = array.length;

    for (let i = 0; i < length; i++) {

        let min = array[i];
        let indexToSwap = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < min) {
                min = array[j];
                indexToSwap = j;
            }
        }

        let temp = array[i];
        array[i] = array[indexToSwap];
        array[indexToSwap] = temp;

    }

    console.log(array)

}


SelectionSort([7, 6, 5, 4, 3, 2, 1]);
SelectionSort(['d', 'r', 'a']);