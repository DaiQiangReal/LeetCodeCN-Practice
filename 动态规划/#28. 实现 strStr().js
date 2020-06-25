//https://leetcode-cn.com/problems/implement-strstr/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    //KMP timeOut
    // if(needle==="")
    //     return 0;
    // function kmp(pat) {
    //     let dp = [];
    //     for (let i = 0; i < pat.length; i++) {
    //         let set = new Set();
    //         pat.split("").map((char) => set.add(char));
    //         let temp = {};
    //         Array.from(set).map((char) => temp[char] = 0)
    //         if(i===0){
    //             temp[pat[0]]=1;
    //         }
    //         dp[i] = temp;
    //     }
    //     let x = 0;
    //     let obj = dp[0];
    //     let keys = Object.keys(obj);
    //     let keyLen=keys.length;
    //     let patLen=pat.length;
    //     for (let i = 1; i < patLen; i++) {
    //         for (let j = 0; j < keyLen; j++) {
    //             if (keys[j] === pat[i])
    //                 dp[i][keys[j]] = i + 1;
    //             else {
    //                 dp[i][keys[j]] = dp[x][keys[j]];
    //             }

    //         }
    //         x = dp[x][pat[i]];
    //     }
    //     return dp;
    // }

    // let kmpKey=kmp(needle);
    // let needleLen=needle.length;
    // let status=0;
    // for(let i=0;i<haystack.length;i++){
    //     if(kmpKey[status][haystack[i]]===undefined){
    //         status=0;
    //         continue;
    //     }
    //     status=kmpKey[status][haystack[i]];
    //     if(status===needleLen){
    //         return i-needleLen+1;
    //     }
    // }
    // return -1;

    //Sunday
    if (needle == "")
        return 0;
    function calShiftTable(needle) {
        let shiftTable = {};
        let set = new Set();
        needle.split("").map((char) => set.add(char));
        let charSet = Array.from(set);
        for (let i = 0; i < charSet.length; i++) {
            for (let j = needle.length - 1; j >= 0; j--) {
                if (needle[j] === charSet[i]) {
                    shiftTable[charSet[i]] = needle.length - j;
                    break;
                }
            }
            
        }
        return shiftTable;
    }
    let needleArray=needle.split("");
    let shiftTable=calShiftTable(needle);
    let i=0;
    while(i<haystack.length){
        if(haystack.slice(i,i+needle.length)===needle){
            return i;
        }else{
            if(needleArray.indexOf(haystack[i+needle.length])!==-1)
                i+=shiftTable[haystack[i+needle.length]];
            else{
                i+=needle.length+1;
            }
        }
    }
    return -1;

};
console.log(strStr('badwadawdaba', 'aba'));
