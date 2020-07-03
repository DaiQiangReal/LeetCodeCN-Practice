//https://leetcode-cn.com/problems/subarray-sum-equals-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let ans=0;
    let sumMap=new Map();
    sumMap.set(0,1)
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sumMap.has(sum-k)){
            ans+=sumMap.get(sum-k);
        }
        if(sumMap.has(sum)){
            sumMap.set(sum,sumMap.get(sum)+1)
        }else{
            sumMap.set(sum,1);
        }
    }
    return ans;
};
console.log(subarraySum([-1,-1,1],0));
