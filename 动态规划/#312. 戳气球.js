//https://leetcode-cn.com/problems/burst-balloons/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let points=new Array(nums.length+2);
    points[0]=1;
    points[nums.length+1]=1;
    for(let i=1;i<=nums.length;i++){
        points[i]=nums[i-1];
    }
    let dp=[];
    for(let i=0;i<=nums.length+1;i++){
        let temp=new Array(nums.length+2).fill(0);
        dp[i]=temp;
    }
    for(let i=nums.length;i>=0;i--)
        for(let j=i+1;j<=nums.length+1;j++){
           
            for(let k=i+1;k<=j-1;k++){
                dp[i][j]=Math.max(dp[i][j],dp[i][k]+dp[k][j]+points[k]*points[i]*points[j]);
            }
        }
    return dp[0][nums.length+1];
};
console.log(maxCoins([3,1,5,8]));

