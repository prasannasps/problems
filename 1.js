function checkAlmostEquivalent() {

    "aaaa"
"bccb"


    const wordlLen = word1.length;
    const word2Len = word2.length;
    const wordMap = {};

    for (let index = 0; index < wordlLen; index++) {
        if (!(word1[index] in wordMap)) {
            wordMap[word1[index]] = 1;
        }
        else {
            wordMap[word1[index]]++;
        }
    }

    for (let index = 0; index < word2Len; index++) {
        if (!(word2[index] in wordMap)) {
            wordMap[word2[index]] = -1;
        }
        else {
            wordMap[word2[index]]--;
        }
    }

    return Object.keys(wordMap).some((word) => wordMap[word] <= 3 && wordMap[word] >= -3);

}

checkAlmostEquivalent();