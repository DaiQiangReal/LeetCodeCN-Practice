//https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices,fee) {
    if (prices.length === 0)
        return 0;
    let dp0 = 0, dp1 = -prices[0];
    for (let i = 0; i < prices.length; i++) {
        let temp=dp0;
        dp0 = Math.max(dp0, dp1 + prices[i]-fee);
        dp1 = Math.max(dp1, temp - prices[i]);
    }
    return dp0;
};
console.log(maxProfit([1, 3, 2, 8, 4, 9],2));
