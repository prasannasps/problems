/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {

    // nums.map(num => {
    //     if (!numsMap[num]) {
    //         numsMap[num] = 1;
    //     }
    //     else {
    //         numsMap[num]++;
    //     }
    // });
    return earn(nums, nums[0]);

};


const earn = (nums, selectedNumber) => {

    if (nums.length === 0) return 0;

    let total = 0;
    // const originalNums = JSON.parse(JSON.stringify(nums));
    const originalNums = nums.slice();
    // let selectedNumber = nums[0];

    total = deleteNums(nums, selectedNumber);
    deleteNums(nums, selectedNumber - 1);
    deleteNums(nums, selectedNumber + 1);
    const nextNum = findNextNum(originalNums);
    return Math.max(total + earn(nums, nums[0]),
        earn(nextNum ? originalNums : [], nextNum || 0));

}


const findNextNum = (nums) => {

    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if (element != nums[0]) return element;
    }

    return false;

}


const deleteNums = (nums, toDelete) => {

    let count = 0;
    while (true) {
        const index = nums.indexOf(toDelete);
        if (index > -1) {
            count += nums.splice(index, 1)[0];
        }
        else {
            return count;
        }
    }

}



console.log(deleteAndEarn([3, 4, 2]));
// console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
