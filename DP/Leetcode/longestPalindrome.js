/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/longest-palindromic-substring/
 * Timeout
 * 
 * Ex : 'bab'
 * generating strings
 * b
 * ba
 * bab
 * a
 * ab
 * 
 * maintaining a memo
 * 
 * memo[0,1]=true
 * memo[0,2]=false
 * 
 */
var longestPalindrome = function (s) {

    const len = s.length;
    const memo = {};
    let max = '';

    for (let i = 0; i < len; i++) {


        for (let j = i; j < len; j++) {

            const word = s.slice(i, j + 1);
            const res = palindrome(word, i, j, memo);
            if (res) {
                max = word.length > max.length ? word : max;
            }

        }

    }

    // console.log(memo);
    return max;

};


/**
 * @param {string} s
 * @param {number} reali
 * @param {number} realj
 * @param {any} memo
 * @return {boolean}
 */
const palindrome = (s, reali, realj, memo = {}) => {

    if ((reali + "::" + realj) in memo) return memo[s];
    const len = s.length;
    let i = 0, j = len - 1;

    while (i < j) {

        const key = ((i + reali) + "::" + (j + reali));
        if (key in memo) {

            memo[(reali + "::" + realj)] = memo[key];
            return memo[(reali + "::" + realj)];
            // return memo[s.slice(i, j + 1)];

        }

        if (s.charAt(i) === s.charAt(j)) {
            i++;
            j--;
        }
        else {
            memo[(reali + "::" + realj)] = false;
            return false;
        }

    }

    memo[(reali + "::" + realj)] = true;
    return true;

}


console.log(longestPalindrome("babad"));

// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
// console.log(longestPalindrome("flsuqzhtcahnyickkgtfnlyzwjuiwqiexthpzvcweqzeqpmqwkydhsfipcdrsjkefehhesubkirhalgnevjugfohwnlhbjfewiunlgmomxkafuuokesvfmcnvseixkkzekuinmcbmttzgsqeqbrtlwyqgiquyylaswlgfflrezaxtjobltcnpjsaslyviviosxorjsfncqirsjpkgajkfpoxxmvsyynbbovieoothpjgncfwcvpkvjcmrcuoronrfjcppbisqbzkgpnycqljpjlgeciaqrnqyxzedzkqpqsszovkgtcgxqgkflpmrikksaupukdvkzbltvefitdegnlmzeirotrfeaueqpzppnsjpspgomyezrlxsqlfcjrkglyvzvqakhtvfmeootbtbwfhqucbnuwznigoyatvkocqmbtqghybwrhmyvvuchjpvjckiryvjfxabezchynfxnpqaeampvaapgmvoylyutymdhvhqfmrlmzkhuhupizqiujpwzarnszrexpvgdmtoxvjygjpmiadzdcxtggwamkbwrkeplesupagievwsaaletcuxtpsxmbmeztcylsjxvhzrqizdmgjfyftpzpgxateopwvynljzffszkzzqgofdlwyknqfruhdkvmvrrjpijcjomnrjjubfccaypkpfokohvkqndptciqqiscvmpozlyyrwobeuazsawtimnawquogrohcrnmexiwvjxgwhmtpykqlcfacuadyhaotmmxevqwarppknoxthsmrrknu"));
