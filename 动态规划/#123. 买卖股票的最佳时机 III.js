//https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length===0)
        return 0;
    let dp=[];
    for(let i=0;i<prices.length;i++){
        let temp=[];
        for(let j=0;j<=2;j++){
            temp[j]=[0,0];
        }
        dp[i]=temp;
    }
    for(let i=0;i<=2;i++){
        dp[0][i]=i===0?[0,-prices[0]]:[-Infinity,-Infinity]
    }
    for(let i=1;i<prices.length;i++){
        for(let j=0;j<=2;j++){
            dp[i][j][0]=Math.max(dp[i-1][j][0],dp[i-1][j-1]===undefined?dp[i-1][0][0]:(dp[i-1][j-1][1]+prices[i]));
            dp[i][j][1]=Math.max(dp[i-1][j][0]-prices[i],dp[i-1][j][1]);
        }
    }
    return Math.max(dp[prices.length-1][0][0],dp[prices.length-1][1][0],dp[prices.length-1][2][0]);
};
console.log(maxProfit([1,2,3,4,5]));
