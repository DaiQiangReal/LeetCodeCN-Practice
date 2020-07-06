//https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i=0;i<nums.length;i++){
        nums[Math.abs(nums[i])-1]=Math.abs(nums[Math.abs(nums[i])-1])*-1;
    }
    let ans=[];
    nums.map((num,index)=>{
        if(num>0)
            ans.push(index+1)
    })
    return ans;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
