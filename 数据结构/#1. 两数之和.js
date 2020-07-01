//https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let originNum=[...nums]
    nums.sort((a,b)=>a-b);
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        if(nums[left]+nums[right]===target){
            return [originNum.indexOf(nums[left]),originNum.lastIndexOf(nums[right])];
        }
        if(nums[left]+nums[right]<target){
            left++;
            continue;
        }else{
            right--;
            continue;
        }
    }
};
console.log(twoSum([-10,-1,-18,-19],-19));
