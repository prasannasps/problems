/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/jump-game/submissions/
 */
var canJump = function (nums) {

    if (nums.length === 1) return true;
    return jump(nums.reverse(), nums.length - 1);

};


const jump = (nums, n, memo = {}) => {

    if (n in memo) return memo[n];
    if (n <= 0)
        return true;

    let nthNum = nums[n];
    while (nthNum--) {
        const _jump = jump(nums, --n, memo);
        if (_jump) {
            memo[n] = true;
            return true;
        }
        // nthNum -= 1;
    }

    return false;

}


// console.log(canJump([1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([2, 0, 0]));
// console.log(canJump([0]));
// console.log(canJump())





const canJump1 = (nums) => {

    let n = nums.length;
    let i = 0;
    for (let reach = 0; i < n && i <= reach; i++) {
        const curr = i + nums[i];
        reach = Math.max(reach, curr);
    }
    return i === n;

}


// console.log(canJump1([1, 1, 4]));
// console.log(canJump1([3, 2, 1, 0, 4]));
// console.log(canJump1([2, 0, 0]));
// console.log(canJump1([0]));
// console.log(canJump1([2, 3, 1, 1, 4]))
