const allConstruct = (targetStr, strs, memo = {}) => {

    if (targetStr in memo) return memo[targetStr];
    if (targetStr === '') return [[]];

    let arrays = [];

    for (let str of strs) {

        if (targetStr.startsWith(str)) {
            let slicedStr = targetStr.slice(str.length);
            let currentArray = allConstruct(slicedStr, strs, memo);
            const targetWays = currentArray.map(curr => [str, ...curr]);
            arrays.push(...targetWays);
        }

    }

    memo[targetStr] = arrays;
    return arrays;

}


console.log(allConstruct("aaa", ["a", "aa"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstruct("aaa", ["a", "aa"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))