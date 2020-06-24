//https://leetcode-cn.com/problems/stone-game/
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    let dp = [];
    for (let i = 0; i <= piles.length; i++) {
        let temp = [];
        for (let j = 0; j <= piles.length; j++) {
            let obj = {};
            obj.fir = 0;
            obj.sec = 0;
            temp[j] = obj;
        }
        dp[i] = temp;
    }
    for (let i = 1; i <= piles.length; i++) {
        dp[i][i].fir = piles[i - 1];
        dp[i][i].sec = 0;
    }
    for (let i = piles.length; i >= 1; i--) {
        for (let j = i+1; j <= piles.length; j++) {
            let left = dp[i + 1][j].sec + piles[i - 1];
            let right = dp[i][j - 1].sec + piles[j - 1];
            if (left > right) {
                dp[i][j].fir = left;
                dp[i][j].sec = dp[i + 1][j].fir;

            } else {
                dp[i][j].fir = right;
                dp[i][j].sec = dp[i][j - 1].fir;
            }
        }
    }
    return dp[1][piles.length].fir-dp[1][piles.length].sec>=0
};
console.log(stoneGame([5,3,4,8,2,1]));
