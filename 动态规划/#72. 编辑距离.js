//https://leetcode-cn.com/problems/edit-distance/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let len1=word1.length;
    let len2=word2.length;
    if(len1===0)
        return len2;
    if(len2===0)
        return len1;
    let dp=[];
    for(let i=0;i<=len1;i++){
        let temp=new Array(len2+1).fill(0);
        dp[i]=temp;
    }
    for(let i=1;i<=len1;i++){
            dp[i][0]=i;
    }
    for(let j=1;j<=len2;j++){
            dp[0][j]=j;
    }
    for(let i=1;i<=len1;i++){
        for(let j=1;j<=len2;j++){
            if(word1[i-1]===word2[j-1]){
                dp[i][j]=dp[i-1][j-1];
                continue;
            }
            dp[i][j]=Math.min(dp[i][j-1]+1,dp[i-1][j]+1,dp[i-1][j-1]+1);
        }
    }
  
    return dp[len1][len2]
};
console.log(minDistance('a','as'));
