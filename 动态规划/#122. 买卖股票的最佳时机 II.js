//https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
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
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i]);
    }
    return dp[prices.length-1][0];

    //better
    // var maxProfit = function(prices) {
    //     if(prices.length===0)
    //         return 0;
    //     let dp0=0,dp1=-prices[0];
    //         for(let i=0;i<prices.length;i++){
    //             dp0=Math.max(dp0,dp1+prices[i]);
    //             dp1=Math.max(dp1,dp0-prices[i]);
    //         }
    //         return dp0;
    // };
};
console.log(maxProfit([7,1,5,3,6,4]));
