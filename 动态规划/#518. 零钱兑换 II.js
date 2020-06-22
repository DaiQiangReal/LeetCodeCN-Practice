//https://leetcode-cn.com/problems/coin-change-2/
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    if(amount===0)
        return 1;
    if(coins.length===0)
        return 0;
    // let dp = [];
    // for (let i = 0; i < coins.length; i++) {
    //     let temp = new Array(amount + 1).fill(0);
    //     temp[0] = 1;
    //     dp[i] = temp;
    // }
    // let t = 0;
    // while (t * coins[0] <= amount) {
    //     dp[0][t * coins[0]] = 1;
    //     t++;
    // }

    // for (let i = 1; i < coins.length; i++) {
    //     for (let j = 1; j <= amount; j++) {
    //         if(j-coins[i]>=0)
    //             dp[i][j]=dp[i-1][j]+dp[i][j-coins[i]]
    //         else
    //             dp[i][j]=dp[i-1][j]
    //     }
    // }
    
    // return dp[coins.length - 1][amount];

    //状态压缩
    let dp=new Array(amount+1).fill(0);
    dp[0]=1;
    for(let i=0;i<coins.length;i++){
        for(let j=1;j<=amount;j++){
            if(j-coins[i]>=0)
                dp[j]=dp[j]+dp[j-coins[i]]
           
        }
    }
    return dp[amount];

};
console.log(change(5, [1, 2, 5]));
