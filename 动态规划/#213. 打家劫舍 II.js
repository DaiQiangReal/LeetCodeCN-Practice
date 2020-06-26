//https://leetcode-cn.com/problems/house-robber-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if(nums.length===1)
        return nums[0];
    function rob1(nums) {
        if (nums.length === 0)
            return 0;
        if (nums.length === 1)
            return nums[0];
        let dp = new Array(nums.length);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        dp[2] = Math.max(nums[1], nums[0] + nums[2]);
        for (let i = 3; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 3] + nums[i - 1]);
        }
        return dp[nums.length - 1];
    }
    return Math.max(rob1(nums.slice(0,nums.length-1)),rob1(nums.slice(1)));
};
console.log(rob([2,3,2]));
