/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * https://leetcode.com/problems/word-break/
 */
var wordBreak = function (s, wordDict) {
    return wordbr(s, wordDict);
};


const wordbr = (s, wordDict, memo = {}) => {

    if (s in memo) return memo[s];
    if (s.length <= 0) return true;

    for (const word of wordDict) {
        if (s.endsWith(word)) {
            const res = wordbr(s.substring(0, s.length - word.length), wordDict, memo);
            if (res) {
                memo[s] = res;
                return memo[s];
            }
        }
    }

    memo[s] = false;
    return false;

}


console.log(wordBreak("leetcode", ["leet", "code"]))
console.log(wordBreak("applepenapple", ["apple", "pen"]))
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
console.log(wordBreak("fohhemkkaecojceoaejkkoedkofhmohkcjmkggcmnami", ["kfomka", "hecagbngambii", "anobmnikj", "c", "nnkmfelneemfgcl", "ah", "bgomgohl", "lcbjbg", "ebjfoiddndih", "hjknoamjbfhckb", "eioldlijmmla", "nbekmcnakif", "fgahmihodolmhbi", "gnjfe", "hk", "b", "jbfgm", "ecojceoaejkkoed", "cemodhmbcmgl", "j", "gdcnjj", "kolaijoicbc", "liibjjcini", "lmbenj", "eklingemgdjncaa", "m", "hkh", "fblb", "fk", "nnfkfanaga", "eldjml", "iejn", "gbmjfdooeeko", "jafogijka", "ngnfggojmhclkjd", "bfagnfclg", "imkeobcdidiifbm", "ogeo", "gicjog", "cjnibenelm", "ogoloc", "edciifkaff", "kbeeg", "nebn", "jdd", "aeojhclmdn", "dilbhl", "dkk", "bgmck", "ohgkefkadonafg", "labem", "fheoglj", "gkcanacfjfhogjc", "eglkcddd", "lelelihakeh", "hhjijfiodfi", "enehbibnhfjd", "gkm", "ggj", "ag", "hhhjogk", "lllicdhihn", "goakjjnk", "lhbn", "fhheedadamlnedh", "bin", "cl", "ggjljjjf", "fdcdaobhlhgj", "nijlf", "i", "gaemagobjfc", "dg", "g", "jhlelodgeekj", "hcimohlni", "fdoiohikhacgb", "k", "doiaigclm", "bdfaoncbhfkdbjd", "f", "jaikbciac", "cjgadmfoodmba", "molokllh", "gfkngeebnggo", "lahd", "n", "ehfngoc", "lejfcee", "kofhmoh", "cgda", "de", "kljnicikjeh", "edomdbibhif", "jehdkgmmofihdi", "hifcjkloebel", "gcghgbemjege", "kobhhefbbb", "aaikgaolhllhlm", "akg", "kmmikgkhnn", "dnamfhaf", "mjhj", "ifadcgmgjaa", "acnjehgkflgkd", "bjj", "maihjn", "ojakklhl", "ign", "jhd", "kndkhbebgh", "amljjfeahcdlfdg", "fnboolobch", "gcclgcoaojc", "kfokbbkllmcd", "fec", "dljma", "noa", "cfjie", "fohhemkka", "bfaldajf", "nbk", "kmbnjoalnhki", "ccieabbnlhbjmj", "nmacelialookal", "hdlefnbmgklo", "bfbblofk", "doohocnadd", "klmed", "e", "hkkcmbljlojkghm", "jjiadlgf", "ogadjhambjikce", "bglghjndlk", "gackokkbhj", "oofohdogb", "leiolllnjj", "edekdnibja", "gjhglilocif", "ccfnfjalchc", "gl", "ihee", "cfgccdmecem", "mdmcdgjelhgk", "laboglchdhbk", "ajmiim", "cebhalkngloae", "hgohednmkahdi", "ddiecjnkmgbbei", "ajaengmcdlbk", "kgg", "ndchkjdn", "heklaamafiomea", "ehg", "imelcifnhkae", "hcgadilb", "elndjcodnhcc", "nkjd", "gjnfkogkjeobo", "eolega", "lm", "jddfkfbbbhia", "cddmfeckheeo", "bfnmaalmjdb", "fbcg", "ko", "mojfj", "kk", "bbljjnnikdhg", "l", "calbc", "mkekn", "ejlhdk", "hkebdiebecf", "emhelbbda", "mlba", "ckjmih", "odfacclfl", "lgfjjbgookmnoe", "begnkogf", "gakojeblk", "bfflcmdko", "cfdclljcg", "ho", "fo", "acmi", "oemknmffgcio", "mlkhk", "kfhkndmdojhidg", "ckfcibmnikn", "dgoecamdliaeeoa", "ocealkbbec", "kbmmihb", "ncikad", "hi", "nccjbnldneijc", "hgiccigeehmdl", "dlfmjhmioa", "kmff", "gfhkd", "okiamg", "ekdbamm", "fc", "neg", "cfmo", "ccgahikbbl", "khhoc", "elbg", "cbghbacjbfm", "jkagbmfgemjfg", "ijceidhhajmja", "imibemhdg", "ja", "idkfd", "ndogdkjjkf", "fhic", "ooajkki", "fdnjhh", "ba", "jdlnidngkfffbmi", "jddjfnnjoidcnm", "kghljjikbacd", "idllbbn", "d", "mgkajbnjedeiee", "fbllleanknmoomb", "lom", "kofjmmjm", "mcdlbglonin", "gcnboanh", "fggii", "fdkbmic", "bbiln", "cdjcjhonjgiagkb", "kooenbeoongcle", "cecnlfbaanckdkj", "fejlmog", "fanekdneoaammb", "maojbcegdamn", "bcmanmjdeabdo", "amloj", "adgoej", "jh", "fhf", "cogdljlgek", "o", "joeiajlioggj", "oncal", "lbgg", "elainnbffk", "hbdi", "femcanllndoh", "ke", "hmib", "nagfahhljh", "ibifdlfeechcbal", "knec", "oegfcghlgalcnno", "abiefmjldmln", "mlfglgni", "jkofhjeb", "ifjbneblfldjel", "nahhcimkjhjgb", "cdgkbn", "nnklfbeecgedie", "gmllmjbodhgllc", "hogollongjo", "fmoinacebll", "fkngbganmh", "jgdblmhlmfij", "fkkdjknahamcfb", "aieakdokibj", "hddlcdiailhd", "iajhmg", "jenocgo", "embdib", "dghbmljjogka", "bahcggjgmlf", "fb", "jldkcfom", "mfi", "kdkke", "odhbl", "jin", "kcjmkggcmnami", "kofig", "bid", "ohnohi", "fcbojdgoaoa", "dj", "ifkbmbod", "dhdedohlghk", "nmkeakohicfdjf", "ahbifnnoaldgbj", "egldeibiinoac", "iehfhjjjmil", "bmeimi", "ombngooicknel", "lfdkngobmik", "ifjcjkfnmgjcnmi", "fmf", "aoeaa", "an", "ffgddcjblehhggo", "hijfdcchdilcl", "hacbaamkhblnkk", "najefebghcbkjfl", "hcnnlogjfmmjcma", "njgcogemlnohl", "ihejh", "ej", "ofn", "ggcklj", "omah", "hg", "obk", "giig", "cklna", "lihaiollfnem", "ionlnlhjckf", "cfdlijnmgjoebl", "dloehimen", "acggkacahfhkdne", "iecd", "gn", "odgbnalk", "ahfhcd", "dghlag", "bchfe", "dldblmnbifnmlo", "cffhbijal", "dbddifnojfibha", "mhh", "cjjol", "fed", "bhcnf", "ciiibbedklnnk", "ikniooicmm", "ejf", "ammeennkcdgbjco", "jmhmd", "cek", "bjbhcmda", "kfjmhbf", "chjmmnea", "ifccifn", "naedmco", "iohchafbega", "kjejfhbco", "anlhhhhg"]))
