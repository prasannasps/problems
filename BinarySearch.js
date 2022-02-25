const binarySearch = (arr, l, m, r, el) => {

    if (el === arr[r]) return r;
    if (el === arr[l]) return l;

    if (r - l <= 1) return -1;

    if (el > arr[m]) return binarySearch(arr, m + 1, Math.floor((m + r) / 2), r, el);
    else return binarySearch(arr, l, (l + m) / 2, m, el);

}



const bin = (arr, el) => {

    return binarySearch(arr, 0, Math.ceil(arr.length / 2), arr.length - 1, el);

}


console.log(bin([1, 3, 5, 6], 0));
console.log(bin([3, 5, 6, 7, 8, 89, 90, 344], 22));
console.log(bin([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 111, 222, 333, 444, 555, 666, 777, 888, 999], 777));