// https://leetcode.com/problems/jump-game-ii/submissions/

const jump = (nums) => {

    if (nums.length === 1) return 0;
    let minJumps = 0;
    let indexToSlice = 0;

    while (true) {
        if (nums[indexToSlice] + indexToSlice >= nums.length - 1) return ++minJumps;
        indexToSlice += looop(nums.slice(indexToSlice, nums[indexToSlice] + indexToSlice + 1));
        minJumps++;
    }


}



const looop = (array) => {

    let selectedIndex = 0;
    const len = array.length;

    for (let i = 0; i < len; i++) {
        // if (i + array[i] >= len - 1) {
        //     return i;
        // }
        if ((i + array[i] > selectedIndex + array[selectedIndex])) {
            selectedIndex = i;
        }
    }

    return selectedIndex;


}


console.log(jump([0]));

console.log(jump([1, 1, 4]));
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));

console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3]));
console.log(jump([2, 1]));
console.log(jump([2, 3, 1]))
console.log(jump([1, 1, 1, 1]))