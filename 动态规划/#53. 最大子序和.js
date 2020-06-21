//https://leetcode-cn.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // let dp=[];
    // for(let i=0;i<nums.length;i++){
    //     dp[i]=nums[i];
    // }
    // for(let i=1;i<nums.length;i++){
    //    dp[i]=Math.max(dp[i-1]+nums[i],nums[i]) 
    // };
    // let max=-Infinity;
    // dp.map(i=>{
    //     if(i>max)
    //         max=i;
    // })
    // return max;

    //状态压缩

    let a=nums[0];
    let max=a;
    for(let i=1;i<nums.length;i++){
        a=Math.max(a+nums[i],nums[i]);
        if(a>max)
            max=a;
    }
    return max;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
