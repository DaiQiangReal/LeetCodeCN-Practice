//https://leetcode-cn.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===0)
        return 0;
    if(nums.length===1)
        return nums[0];
    let dp=new Array(nums.length);
    dp[0]=nums[0];
    dp[1]=Math.max(nums[0],nums[1]);
    dp[2]=Math.max(nums[1],nums[0]+nums[2]);
    for(let i=3;i<nums.length;i++){
        dp[i]=Math.max(dp[i-2]+nums[i],dp[i-3]+nums[i-1]);
    }
    return dp[nums.length-1];
};
console.log(rob([1,2,3,1]));
