const mergeSortedArray = () => {
    const arr1 = [0, 1, 2];
    const arr2 = [1, 3, 4];

    // const newArr = new Set([...arr1, ...arr2]);
    // console.log(newArr);


    let arr2Ind = 0;
    let arr1Ind = 0;
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;

    const chosenLen = arr1Len > arr2Len ? arr1Len : arr2Len;

    const sortedArr = [];

    while (arr1Ind < chosenLen) {

        if (arr1Ind > arr1Len) {
            sortedArr.push(arr2[arr1Ind]);
            arr1Ind++;
            continue;
        }


        if (arr1[arr1Ind] > arr2[arr2Ind]) {
            sortedArr.push()
        }
    }

    console.log(sortedArr);

    // arr1.map(val => {
    //     if (val > arr2[arr2Ind]) {
    //         sortedArr.push()
    //     }
}

mergeSortedArray();
// }