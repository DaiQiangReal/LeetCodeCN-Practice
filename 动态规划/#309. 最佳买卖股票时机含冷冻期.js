//https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0)
        return 0;
    // let dp = [];
    // for (let i = 0; i < prices.length; i++) {
    //     dp[i] = [0, 0]
    // }
    // dp[0][0] = 0;
    // dp[0][1] = -prices[0];
    // for (let i = 1; i < prices.length; i++) {
    //     dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
    //     if (i > 1)
    //         dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
    //     else {
    //         dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    //     }
    // }
    // return dp[prices.length - 1][0];

    let preDaySold=0;
        let dp0=0,dp1=-prices[0];
            for(let i=0;i<prices.length;i++){
                let temp=dp0;
                dp0=Math.max(dp0,dp1+prices[i]);
                if(i>1){
                    dp1=Math.max(dp1,preDaySold-prices[i]);
                    preDaySold=temp;
                }else{
                    dp1=Math.max(dp1,temp-prices[i]);
                }
                
            }
            return dp0;
};
console.log(maxProfit([1, 2, 3, 0, 2]));
