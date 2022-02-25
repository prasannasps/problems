/**
 * 
 * @param {string} string 
 */
const validParantheses = (string) => {

    // const stack = [];
    let openBracketCount = 0;
    let currentValidCount = 0;
    let totalValidCount = 0;

    for (let i = 0; i < string.length; i++) {
        currentValidCount++;
        const char = string.charAt(i);
        if (openBracketCount > 0 && char === ')') {
            // stack.pop();
            openBracketCount--;
        }
        else if (char === '(' && i != string.length - 1) {
            openBracketCount++;
            // stack.push(char);
        }
        else {
            currentValidCount = 0;
            // stack.push(char);
        }
        totalValidCount = Math.max(totalValidCount, currentValidCount);
    }

    return totalValidCount;

}


console.log(validParantheses(')()()('));
console.log(validParantheses('(()))())'));
console.log(validParantheses('())()()())(()))'));
