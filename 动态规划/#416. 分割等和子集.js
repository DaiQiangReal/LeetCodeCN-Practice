//https://leetcode-cn.com/problems/partition-equal-subset-sum/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum=0;
    nums.map(i=>sum+=i);
    if(sum%2!==0)
        return false;
    // let dp=[];
    // for(let i=0;i<nums.length;i++){
    //     dp[i]=new Array(sum/2+1).fill(false);
    // }

    
    // for(let i=0;i<nums.length;i++){
    //     dp[i][nums[i]]=true;
    //     dp[i][0]=true;
    // }
    
    
    // for(let i=1;i<nums.length;i++){
    //     for(let j=1;j<=sum/2;j++){
    //         if(j-nums[i]<0)
    //             dp[i][j]=dp[i-1][j];
    //         else{
    //             dp[i][j]=(dp[i-1][j]||dp[i-1][j-nums[i]])
    //         }    
            
    //     }
    // }
  
    // return dp[nums.length-1][sum/2]
    
    //状态压缩

    let dp=new Array(sum/2+1).fill(false);
    dp[0]=true;
     for(let i=0;i<nums.length;i++){
        for(let j=sum/2;j>=0;j--){
            if(j-nums[i]<0)
                continue;
            dp[j]=dp[j]||dp[j-nums[i]]
        }
    }

    return dp[sum/2]
    
};
console.log(canPartition([1,2,5]));
