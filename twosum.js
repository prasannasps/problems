/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];

        if (another in map) {
            console.log([map[another], i]);
        }

        map[nums[i]] = i;
    }

    return null;
};

// twoSum([3, 3], 6);

twoSum([0, 4, 3, 0], 0);

