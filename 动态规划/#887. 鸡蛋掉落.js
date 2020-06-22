//https://leetcode-cn.com/problems/super-egg-drop/
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
    let memo = new Map();
    function dp(K, N) {
        if (memo.has(K + "," + N))
            return memo.get(K + "," + N);
        if (K === 1)
            return N;
        if (N === 0) {
            return 0;
        }
        // let res=Infinity;
        // for(let i=1;i<=N;i++){
        //     res=Math.min(res,Math.max(dp(K,N-i),dp(K-1,i-1))+1)
        // }
        let left = 1, right = N;
        let mid;
        let res = Infinity;
        while (left <= right) {
            mid = Math.round((left + right) / 2);
            let leftCalc = dp(K, N - mid) + 1;
            let rightCalc = dp(K - 1, mid - 1) + 1;
            if (leftCalc > rightCalc) {
                left = mid + 1;
                res = Math.min(res, leftCalc)
                continue;
            }
            else {
                right = mid - 1;
                res = Math.min(res, rightCalc)
                continue;
            }
        }
        memo.set(K + "," + N, res);
        return res;
    }
    return dp(K, N);
};
console.log(superEggDrop(4, 5000));
