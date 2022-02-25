


const ninja = (nums, N) => {

    return sum(nums, N, nums.length - 1, N - 1);

}

const sum = (nums, N, x, y) => {

    // if (y === yToDiscard) y += 1;
    // if (x >= nums.length || y >= N) return 0;
    // if (x === nums.length - 1 && y === N - 1) return nums[x][y];
    // if (y === yToDiscard) return Math.max((nums[x][y] + sum(nums, N, x + 1, y, y)), sum(nums, N, x, y + 1, y));

    if (x < 0 || y < 0) return 0;
    if (x === 0 && y === 0) return nums[x][y];

    return Math.max((nums[x][y] + sum(nums, N, x - 1, y)), sum(nums, N, x - 1, y - 1));

}

console.log(ninja([[1, 1, 3], [1, 1, 2]], 3));
console.log(ninja([[1, 1, 2, 1, 7], [7, 9, 0, 9, 10], [1, 2, 3, 4, 5]], 5));

