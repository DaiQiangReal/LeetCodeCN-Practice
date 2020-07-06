//https://leetcode-cn.com/problems/is-subsequence/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i=0;
    let j=0;
    while(i<s.length){
        while(t[j]!==s[i]){
            j++;
            if(j>=t.length)
                return false;
        }
        i++;
        j++;
    }
    return true;
};
console.log(isSubsequence("",""));
