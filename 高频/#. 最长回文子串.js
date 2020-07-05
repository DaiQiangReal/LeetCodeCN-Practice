//https://leetcode-cn.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let max=0;
    let maxSubString='';
    for(let i=0;i<s.length;i++){
        let left,right;
        [left,right]=getPalindromeIndex(i,i);
        if(right-left+1>max){
            max=right-left+1;
            maxSubString=s.substring(left,right+1);
        }
        [left,right]=getPalindromeIndex(i,i+1);
        if(right-left+1>max){
            max=right-left+1;
            maxSubString=s.substring(left,right+1);
        }
    }
    return maxSubString;
    function getPalindromeIndex(i,j){
        if(i===j){
            i=i-1;
            j=j+1;
        }
        while(s[i]===s[j]&&i>=0&&j<s.length){
            i--;
            j++;
        }
        return [i+1,j-1];
    }
    
};
console.log(longestPalindrome('dawgakjyjmjydawdd'));

