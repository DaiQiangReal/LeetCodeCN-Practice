//https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length===0)
        return 0;
    let dp=[];
    for(let i=0;i<prices.length;i++){
        dp[i]=[0,0]
    }
    dp[0][0]=0;
    dp[0][1]=-prices[0];
    for(let i=1;i<prices.length;i++){
        dp[i][0]=Math.max(dp[i-1][1]+prices[i],dp[i-1][0]);
        dp[i][1]=Math.max(dp[i-1][1],-prices[i]);
    }  
    return dp[prices.length-1][0];
};
console.log(maxProfit([7,1,5,3,6,4]));
