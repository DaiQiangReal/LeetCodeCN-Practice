//https://leetcode-cn.com/problems/coin-change/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount===0)
        return 0;
    if(coins.length===0)
        return -1;
    let dp=new Array(amount+1).fill(Infinity);
    dp[0]=0;
    dp[coins[0]]=1;
    let min=Infinity;
    for(let i=0;i<coins.length;i++){
        for(let j=coins[i];j<=amount;j++){
                dp[j]=Math.min(dp[j],dp[j-coins[i]]+1);
        }
    }
  
    
    return dp[amount]===Infinity?-1:dp[amount];
};
console.log(coinChange([1, 2],2));
