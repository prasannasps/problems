const firstRecurringChar = () => {
    const strs = ['1', '1', '2', '3', '4'];

    const strMap = {};


    for (let index = 0; index < strs.length; index++) {
        const element = strs[index];
        if (strMap[element]) {
            return console.log(element);
        }

        strMap[element] = true;

    }

    return console.log('not found');


}

firstRecurringChar();