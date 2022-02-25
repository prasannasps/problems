const countConstruct = (targetStr, strs, memo = {}) => {

    if (targetStr in memo) return memo[targetStr];
    if (targetStr === '') {
        return 1;
    }

    let totalCount = 0;

    for (let str of strs) {
        if (targetStr.startsWith(str)) {
            let slicedStr = targetStr.slice(str.length);
            const remainingCount = countConstruct(slicedStr, strs, memo);
            totalCount += remainingCount;
        }

    }

    memo[targetStr] = totalCount;
    return totalCount;

}


console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("aaa", ["a", "aa"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))