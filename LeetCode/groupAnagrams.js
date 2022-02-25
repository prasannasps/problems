/**
 * @param {string[]} strs
 * @return {string[][]}
 * https://leetcode.com/problems/group-anagrams/
 */
var groupAnagrams = function (strs) {

    const sortedStrs = [];

    strs.forEach(str => {
        sortedStrs.push(str.split("").sort().join(""));
    });

    const resultList = [];
    while (sortedStrs.length) {

        const list = [];
        const firstEl = sortedStrs[0];

        for (let i = 1; i < sortedStrs.length; i++) {
            const element = sortedStrs[i];

            if (firstEl === element) {
                list.push(strs.splice(i, 1)[0]);
                sortedStrs.splice(i, 1);
                i--;
            }

        }
        list.push(strs.splice(0, 1)[0]);
        sortedStrs.splice(0, 1);
        resultList.push(list);

    }

    return resultList;

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams(["a"]))
console.log(groupAnagrams([""]))

