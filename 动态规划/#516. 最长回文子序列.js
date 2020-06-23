//https://leetcode-cn.com/problems/longest-palindromic-subsequence/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let dp=[];
    for(let i=0;i<=s.length;i++){
        let temp=new Array(s.length+1).fill(0);
        dp[i]=temp;
    }
    for(let i=0;i<=s.length;i++){
        dp[i][i]=1;
    }
    for(let i=s.length;i>=1;i--){
        for(let j=i+1;j<=s.length;j++){
            if(s[i-1]===s[j-1]){
                dp[i][j]=dp[i+1][j-1]+2;
                continue;
            }
            dp[i][j]=Math.max(dp[i+1][j],dp[i][j-1]);
        }
    } 
    return dp[1][s.length]
};
console.log(longestPalindromeSubseq('bbbab'));
