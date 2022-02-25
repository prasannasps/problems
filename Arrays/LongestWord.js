function LongestWord() {

    let str = 'abcd !@!1234';

    const regex1 = /!/gi;
    const regex2 = /@/gi;
    // const regex3 = /!/gi;

    str = str.replace(regex1, '');
    str = str.replace(regex2, '');
    const arr = str.split(' ');

    console.log(arr.reduce((a, b) => { return a.length > b.length ? a : b; }));

}


// keep this function call here 
console.log(LongestWord());