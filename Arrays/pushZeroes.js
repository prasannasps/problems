const pushZeroes = (array) => {

    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            array[count++] = array[i];
        }
    }

    while (count < array.length) {
        array[count++] = 0;
    }

    return array;

}

console.log(pushZeroes([1, 2, 0, 3, 0, 45]));