//https://leetcode-cn.com/problems/set-mismatch/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let ans=[];
    for(let i=0;i<nums.length;i++){
        if(nums[Math.abs(nums[i])-1]<0)
            ans[0]=Math.abs(nums[i]);
        nums[Math.abs(nums[i])-1]=Math.abs(nums[Math.abs(nums[i])-1])*-1;
    }
    nums.map((num,index)=>{
        if(num>0){
            ans[1]=index+1;
        }
    })
    return ans;
    
};
console.log(findErrorNums([3,2,3,4,6,5]));
